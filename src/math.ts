import { Matrix4, Quaternion, Vector3 } from "./deps.ts";
import { TransformFromMatrix } from "./models.ts";

export function TransformLoc(matrix: Matrix4, pivot: Vector3): Matrix4 {
    matrix = matrix.clone();


    const dec = TransformFromMatrix(matrix)
    const scale = dec.scale

    const difference = new Matrix4()
    difference.makeTranslation(scale.x * pivot.x, scale.y * pivot.y, scale.z * pivot.z) //compensate pivot difference
    difference.makeRotationFromQuaternion(dec.rotation)

    const compensation = new Vector3();
    compensation.setFromMatrixPosition(difference)

    const translation = new Vector3()
    dec.position.copy(translation)
    translation.add(compensation)

    matrix.makeTranslation(translation.x, translation.y, translation.z)

    return matrix;
}

export function NumArrayFromString(str: string): number[] {
    if (str.trim().length == 0) return []
    // '-54.74046 11.9889 12.34584 1304.077 1.977105 1.008772 369.6997 4271.138 -8.320115 -78.63877 6.62467 5143.084 0 0 0 1'

    return str.split(' ').map(s => parseFloat(s))
}