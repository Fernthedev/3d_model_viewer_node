import { Matrix4, Quaternion, Vector3, Euler } from "./deps.ts"

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

export function MatrixFromArray(nums: number[]): Matrix4 {
    return new Matrix4().set(
        nums[0], nums[4], nums[8], nums[12],
        nums[1], nums[5], nums[9], nums[13],
        nums[2], nums[6], nums[10], nums[14],
        nums[3], nums[7], nums[11], nums[15]
    ) 
}

function quaternionFromMatrix(matrix: Matrix4) {
    const quat = new Quaternion()
    const tmpSetFromScaledRotationMatrix = new Matrix4();
    const tmp2SetFromScaledRotationMatrix = new Vector3();

    const te = matrix.elements;

    let sx = tmp2SetFromScaledRotationMatrix.set(te[0], te[1], te[2]).length();
    const sy = tmp2SetFromScaledRotationMatrix.set(te[4], te[5], te[6]).length();
    const sz = tmp2SetFromScaledRotationMatrix.set(te[8], te[9], te[10]).length();

    // if determine is negative, we need to invert one scale
    const det = matrix.determinant();
    if (det < 0) sx = -sx;

    // scale the rotation part
    tmpSetFromScaledRotationMatrix.copy(matrix);

    const invSX = 1 / sx;
    const invSY = 1 / sy;
    const invSZ = 1 / sz;

    tmpSetFromScaledRotationMatrix.elements[0] *= invSX;
    tmpSetFromScaledRotationMatrix.elements[1] *= invSX;
    tmpSetFromScaledRotationMatrix.elements[2] *= invSX;

    tmpSetFromScaledRotationMatrix.elements[4] *= invSY;
    tmpSetFromScaledRotationMatrix.elements[5] *= invSY;
    tmpSetFromScaledRotationMatrix.elements[6] *= invSY;

    tmpSetFromScaledRotationMatrix.elements[8] *= invSZ;
    tmpSetFromScaledRotationMatrix.elements[9] *= invSZ;
    tmpSetFromScaledRotationMatrix.elements[10] *= invSZ;

    return quat.setFromRotationMatrix(tmpSetFromScaledRotationMatrix);
}

export function TransformFromMatrix(m: Matrix4) {
    // f.transform = {
    //     position: {x: 0, y: 0, z:0},
    //     rotation: { x: 0, y: 0, z: 0, w: 0 },
    //     scale: { x: 0, y: 0, z: 0 }
    // }


    // idk what I'm doing anymore
    // rotation is broken

    const transform: Transform = {
        position: new Vector3(m.elements[3], m.elements[7], m.elements[11]),
        rotation: quaternionFromMatrix(m),
        scale: new Vector3(m.elements[0], m.elements[5], m.elements[10])
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