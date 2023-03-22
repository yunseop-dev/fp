export default function findIndex<T>(
    list: T[],
    predicate: (value: T, index: number, obj: T[]) => boolean
): number {
    for (let i = 0, len = list.length; i < len; i++) {
        if (predicate(list[i], i, list)) {
            return i
        }
    }
    return -1;
}
