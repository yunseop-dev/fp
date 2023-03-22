export default function filter<S extends T, T>(
    list: S[],
    predicate: (value: T, index: number, array: T[]) => value is S): S[] {
    const newList = []
    for (let i = 0, len = list.length; i < len; i++) {
        if (predicate(list[i], i, list)) {
            newList.push(list[i])
        }
    }
    return newList
}
