export default function map<T, U>(
    list: T[],
    callbackfn: (value: T, index: number, array: T[]) => U
): U[] {
    const newList = [];
    for (let i = 0, len = list.length; i < len; i++) {
        newList.push(callbackfn(list[i], i, list))
    }
    return newList;
}

