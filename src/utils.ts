// deno-lint-ignore-file no-explicit-any
export function copy<T>(obj: T): T {
    if (obj == null || typeof obj !== "object") { return obj; }

    const newObj: any = Array.isArray(obj) ? [] : {};
    const keys = Object.getOwnPropertyNames(obj);

    keys.forEach(x => {
        const value = copy((obj as any)[x]);
        newObj[x] = value;
    })

    Object.setPrototypeOf(newObj, obj as any);
    return newObj as T;
}