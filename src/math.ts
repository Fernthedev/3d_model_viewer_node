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
    difference.decompose(compensation, new Quaternion(), new Vector3())

    const translation = new Vector3()
    dec.position.copy(translation)
    translation.add(compensation)

    matrix.makeTranslation(translation.x, translation.y, translation.z)

    return matrix;
}