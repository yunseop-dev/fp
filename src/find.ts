export default function find<T>(
    list: T[],
    predicate: (value: T, index: number, list: T[]) => boolean): T {
    for (let i = 0, len = list.length; i < len; i++) {
        if (predicate(list[i], i, list)) {
            return list[i];
        }
    }
}
