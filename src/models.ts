import { Matrix4, Quaternion, Vector3 } from "./deps.ts"

// export interface Vector3 {
//     x: number,
//     y: number,
//     z: number
// }

// export interface Quaternion {
//     x: number,
//     y: number,
//     z: number,
//     w: number
// }

export interface Color {
    r: number,
    g: number,
    b: number,
    a: number
}

// export interface Matrix4f {
//     /// <summary>The first element of the first row.</summary>
//     M11: number

//     /// <summary>The second element of the first row.</summary>
//     M12: number

//     /// <summary>The third element of the first row.</summary>
//     M13: number

//     /// <summary>The fourth element of the first row.</summary>
//     M14: number

//     /// <summary>The first element of the second row.</summary>
//     M21: number

//     /// <summary>The second element of the second row.</summary>
//     M22: number

//     /// <summary>The third element of the second row.</summary>
//     M23: number

//     /// <summary>The fourth element of the second row.</summary>
//     M24: number

//     /// <summary>The first element of the third row.</summary>
//     M31: number

//     /// <summary>The second element of the third row.</summary>
//     M32: number

//     /// <summary>The third element of the third row.</summary>
//     M33: number

//     /// <summary>The fourth element of the third row.</summary>
//     M34: number

//     /// <summary>The first element of the fourth row.</summary>
//     M41: number

//     /// <summary>The second element of the fourth row.</summary>
//     M42: number

//     /// <summary>The third element of the fourth row.</summary>
//     M43: number

//     /// <summary>The fourth element of the fourth row.</summary>
//     M44: number

// }

export interface Transform {
    position: Vector3,
    rotation: Quaternion,
    scale: Vector3
}

export function TransformFromMatrix(m: Matrix4) {
    // f.transform = {
    //     position: {x: 0, y: 0, z:0},
    //     rotation: { x: 0, y: 0, z: 0, w: 0 },
    //     scale: { x: 0, y: 0, z: 0 }
    // }

   const transform: Transform = {
        position: new Vector3(m.elements[3], m.elements[7], m.elements[11]),
        rotation: new Quaternion(0, 0, 0, 0),
        scale: new Vector3(0, 0, 0)
   }
    
    transform.rotation.setFromRotationMatrix(m)
    transform.scale.setFromMatrixScale(m)

    return transform;
}

export interface Frame {
    frameId: number,
    transform?: Transform,
    offsetTransform?: Transform,
    matrix: Matrix4
    offsetMatrix?: Matrix4,
    dissolve?: number | undefined
    color?: Color
    active?: boolean | undefined,
}

export interface Cube {
    name: string,

    frames: Frame[] | undefined

    transformation?: Transform
    offsetTransformation?: Transform
    matrix: Matrix4
    offsetMatrix: Matrix4,
    camera: boolean,

    frameSpan: [number, number]

    color: Color | undefined,
    material: string[] | undefined

    note: boolean,
    bomb: boolean,
    wall: boolean
    track?: string
}