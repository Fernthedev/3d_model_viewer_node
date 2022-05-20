export interface Vector3 {
    x: number,
    y: number,
    z: number
}

export interface Quaternion {
    x: number,
    y: number,
    z: number,
    w: number
}

export interface Color {
    r: number,
    g: number,
    b: number,
    a: number
}

export interface Matrix4f {
    /// <summary>The first element of the first row.</summary>
    M11: number

    /// <summary>The second element of the first row.</summary>
    M12: number

    /// <summary>The third element of the first row.</summary>
    M13: number

    /// <summary>The fourth element of the first row.</summary>
    M14: number

    /// <summary>The first element of the second row.</summary>
    M21: number

    /// <summary>The second element of the second row.</summary>
    M22: number

    /// <summary>The third element of the second row.</summary>
    M23: number

    /// <summary>The fourth element of the second row.</summary>
    M24: number

    /// <summary>The first element of the third row.</summary>
    M31: number

    /// <summary>The second element of the third row.</summary>
    M32: number

    /// <summary>The third element of the third row.</summary>
    M33: number

    /// <summary>The fourth element of the third row.</summary>
    M34: number

    /// <summary>The first element of the fourth row.</summary>
    M41: number

    /// <summary>The second element of the fourth row.</summary>
    M42: number

    /// <summary>The third element of the fourth row.</summary>
    M43: number

    /// <summary>The fourth element of the fourth row.</summary>
    M44: number

}

export interface Transform {
    position: Vector3,
    rotation: Quaternion,
    scale: Vector3
}

export interface Frame {
    frameId: number,
    transform: Transform,
    offsetTransform: Transform,
    matrix: Matrix4f
    offsetMatrix: Matrix4f,
    dissolve: number | undefined
    color: Color
    active: boolean | undefined,
}

export interface Cube {
    name: string,

    frames: Frame[] | undefined

    transformation: Transform
    offsetTransformation: Transform
    matrix: Matrix4f
    offsetMatrix: Matrix4f,
    camera: boolean,

    frameSpan: number

    color: Color,


    note: boolean,
    bomb: boolean,
    wall: boolean
    track: string
}