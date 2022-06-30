import { Color, Cube, Frame, TransformFromMatrix } from './models.ts';
import { COLLADAType, SourceType } from './xmlns/www.collada.org/2005/11/COLLADASchema.ts';
import { copy } from './utils.ts';
import { NumArrayFromString, TransformLoc } from './math.ts';
import { parseGLTF } from './loader.ts';
import { xml2js, Vector3, Matrix4 } from "./deps.ts";
import { Node } from "./gltf-loader-ts/gltf.ts";
import { GltfAsset } from "./gltf-loader-ts/gltf-asset.ts";



export type { COLLADAType as Collada } from './xmlns/www.collada.org/2005/11/COLLADASchema.ts';
export * from './xmlns/www.collada.org/2005/11/COLLADASchema.ts';

export async function GetGLTFModelAsync(file: string) {
    const buffer = await Deno.readFile(file);
    const model: GltfAsset = parseGLTF(buffer);

    return model;
}

export async function GetColladaModelAsync(file: string) {
    const str = (await Deno.readTextFile(file)).toString();

    const collada: COLLADAType = (xml2js(str, {
        compact: true,
        alwaysArray: true
    }).COLLADA as any)[0] as COLLADAType;

    return collada;
}

export function GetColladaModelSync(file: string) {
    const str = (Deno.readTextFileSync(file)).toString();

    const collada: COLLADAType = (xml2js(str, {
        compact: true,
        alwaysArray: true
    }).COLLADA as any)[0] as COLLADAType;

    return collada;
}

export function GetCubesGLTF(gltf: GltfAsset) {
    const cubes: Cube[] = []

    const addNodes = (node: Node) => {
        console.log(`Node: ${node.name}`)
        // cubes.push(node)
    }



    gltf.gltf.nodes?.forEach(addNodes)

    throw "Not implemented yet"
}

export function SetCubeOffset(cube: Cube) {
    if (cube.frames?.every(f => f.matrix && f.transform)) {
        cube.frames = cube.frames.map((f) => {
            const frameTransform = TransformFromMatrix(f.matrix) //compensate pivot difference

            
            let mat = f.matrix.clone();
            mat = TransformLoc(mat.clone(), new Vector3(0, -1, -1))

            const transformedMatrix = TransformFromMatrix(mat)
            transformedMatrix.position.add(new Vector3(frameTransform.scale.x - 2, 0, 0))
            mat.makeTranslation(transformedMatrix.position.x, transformedMatrix.position.y, transformedMatrix.position.z)

            f.offsetMatrix = mat

            return f
        })
    }

    const trans = TransformFromMatrix(cube.matrix)
    let mat = cube.matrix.clone();
    mat = TransformLoc(mat, new Vector3(0, -1, -1))

    const transformedMatrix = TransformFromMatrix(mat)
    transformedMatrix.position.add(new Vector3(trans.scale.x - 2, 0, 0))
    mat.makeTranslation(transformedMatrix.position.x, transformedMatrix.position.y, transformedMatrix.position.z)

    cube.offsetMatrix = mat
}

export function PostProcessCube(cube: Cube): Cube[] | undefined {
    if (!cube.frames || cube.frames?.every(f => f.active == cube.frames![0].active)) {
        return undefined;
    }

    const frameSpan: [number, number][] = []

    let currentFrameSpan: [boolean, number, number] = [false, 0, 0]
    let lastActive: boolean | undefined = false;

    cube.frames.forEach((f, i) => {
        if (lastActive === undefined || lastActive !== f.active) {
            frameSpan.push([currentFrameSpan[1], currentFrameSpan[2]])

            currentFrameSpan = [f.active!, i, i + 1]
        } else {
            currentFrameSpan[2]++
        }

        lastActive = f.active
    })

    if (currentFrameSpan[0]) {
        frameSpan.push([currentFrameSpan[1], currentFrameSpan[2]])
    }
    SetCubeOffset(cube)

    return frameSpan.map((f) => {
        const clone = copy(cube)
        clone.frameSpan = f
        clone.frames = cube.frames?.slice(f[0], f[1])

        return clone
    })
}

export function GetCubesCollada(collada: COLLADAType): Cube[] {
    const cubes: Cube[] = []

    const scenes = collada.library_visual_scenes?.map((scene) => scene.visual_scene).forEach(e => e.forEach(s => s.node.forEach((node) => {
        if (!node.instance_geometry && !node.instance_camera) return;

        const matrix: Matrix4 = new Matrix4()
        matrix.fromArray(NumArrayFromString((node.matrix!.flat()[0] as any)._text[0] as string))
        const frames: Frame[] = []

        const fixFrames = () => {
            frames.forEach((_, i) => {
                frames[i] ??= {
                    frameId: i,
                    matrix: new Matrix4()
                }

                frames[i].frameId = i;
            })
        }

        const getFrame = (i: number) => {
            return frames[i] ??= {
                frameId: i,
                matrix: new Matrix4().identity()
            }
        }



        const animationType = collada.library_animations?.find((a) => a.name === node.name);
        if (animationType) {

            const findAnimation = (pred: (str: string) => unknown) => animationType.animation.flatMap(a => a.animation).find((a) => (a as any)._attributes.id && pred((a as any)._attributes.id))?.source.find((a) => (a as any)._attributes.id?.indexOf("-output") !== -1)


            const matrices: Matrix4[] = [];

            const transformAnimation = findAnimation((id) => id.indexOf("transform") !== -1)
            if (transformAnimation?.float_array) {
                const transformValues = NumArrayFromString(transformAnimation?.float_array[0]._text[0]);

                for (let i = 0; i < transformValues.length; i += 16) {
                    const matrix = new Matrix4().identity()
                    matrix.fromArray(transformValues.slice(i, i + 16))

                    matrices.push(matrix)
                }
            }

            const visibleAnimation = findAnimation((id) => id.indexOf("hide_viewport") !== -1)

            const redAnimation = findAnimation((id) => id.match("_color_R$"))
            const greenAnimation = findAnimation((id) => id.match("_color_G$"))
            const blueAnimation = findAnimation((id) => id.match("_color_B$"))
            const alphaAnimation = findAnimation((id) => id.match("_color$"))
            const colors: Color[] = []

            const handleColor = (s: SourceType | undefined, f: (num: number, i: number) => void) => {
                if (s?.float_array) {
                    NumArrayFromString(s?.float_array[0]._text[0]).forEach(f)
                }
            }

            handleColor(redAnimation, (r, i) => colors[i].r = r)
            handleColor(greenAnimation, (g, i) => colors[i].g = g)
            handleColor(blueAnimation, (b, i) => colors[i].b = b)
            handleColor(alphaAnimation, (a, i) => colors[i].a = a)

            NumArrayFromString(visibleAnimation?.float_array?.[0]._text[0] ?? "").forEach((visible, i) => {
                getFrame(i).active = visible == 0;
            })

            matrices.forEach((m, i) => {
                const frame = getFrame(i);
                frame.matrix = m;
            })

            colors.forEach((c, i) => {
                const frame = getFrame(i);
                frame.color = c;
            })
        }

        fixFrames()

        const cube: Cube = {
            name: node.name ?? (node as any)._attributes.id,
            matrix: matrix,
            frames: frames,
            material: node.instance_geometry?.flatMap(e => e.bind_material?.[0].technique_common?.[0].instance_material.map(m => m._attributes.symbol.split("-material")[0]) as string[]).filter(e => e),
            offsetMatrix: new Matrix4(),
            camera: node.instance_camera !== undefined,
            frameSpan: [0, frames.length],
            color: undefined,
            note: false,
            bomb: node.instance_geometry?.some(e => e.url?.indexOf("sphere") ?? -1 !== -1) ?? false,
            wall: false,
        }

        if (collada.library_effects && cube.material && cube.material.length > 0) {
            const effectContainer = collada.library_effects.flatMap(e => e.effect)
            const correctEffect = effectContainer.find(e => e._attributes.id.split("-effect")[0] === cube.material![0])!


            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            // deno-lint-ignore no-explicit-any
            const profile_common = correctEffect.profile_COMMON

            const colorArray = NumArrayFromString(profile_common.flatMap(p => p.technique[0].lambert[0].diffuse?.[0].color)[0]!._text[0])
            cube.color = colorArray && { r: colorArray[0], g: colorArray[1], b: colorArray[2], a: colorArray[3] }
        }

        if (cube.material && cube.material.length > 0) {
            cube.note = cube.material.some(m => m.indexOf("note") !== -1)
            cube.track = cube.material.reverse().find((e) => e.toLowerCase().startsWith("track_")) ?? cube.material[cube.material.length - 1]
        }

        cubes.push(cube)
    })))



    return cubes.flatMap((c) => PostProcessCube(c) ?? c).map((c) => {
        c.transformation = TransformFromMatrix(c.matrix)
        c.offsetTransformation = TransformFromMatrix(c.offsetMatrix)

        return c
    })
}

// sad
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const gltf = require('three/examples/jsm/loaders/GLTFLoader.js');

// import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// export async function GetGLTFModelAsync(file: string) {
//     const loader = new GLTFLoader();
//     const model = await loader.loadAsync(file);

//     return model;
// }


// export function GetCubes(gltf: GLTF) {
//     const cubes: Cube[] = []

//     // const addNodes = (node: Node) => {
//     //     console.log(`Node: ${node.name}`)
//     //     cubes.push(node)
//     // }



//     gltf.scene.children?.forEach((node) => {
//         console.log(`Node: ${node.name}`)
//     })
// }

