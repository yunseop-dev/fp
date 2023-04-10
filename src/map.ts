// getLength
// isArrayLike 사용

import identity from "./identity";

// function map<T, U>(
//     list: T[],
//     callbackfn: (value: T, index: number, array: T[]) => U
// ): U[] {
//     const newList = [];
//     for (let i = 0, len = list.length; i < len; i++) {
//         newList.push(callbackfn(list[i], i, list))
//     }
//     return newList;
// }

const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

function getLength(data: any) {
    return data == null ? void 0 : data.length;
}

function isArrayLike(data: any) {
    const length = getLength(data);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
}

// array, push_to, noop
function array(): any {
    return []
}
function push_to(value: any, arr: any[]) {
    return arr.push(value);
}
function noop() {

}

function bloop(newData: any, body: any) {
    return function (data: any, iteratee: any) {
        const result = newData(data);
        if (isArrayLike(data)) {
            for (let i = 0, len = data.length; i < len; i++) {
                body(iteratee(data[i], i, data), result)
            }
        } else {
            for (let key in data) {
                if (data.hasOwnProperty(key)) body(iteratee(data[key], key, data), result)
            }
        }
        return result;
    }
}

export const map2 = bloop(array, push_to)
export const each2 = bloop(identity, noop)

export default function map(
    list: any,
    callbackfn: (value: any, index: number | string, array: any[]) => any[]
) {
    const newList = []; //
    if (isArrayLike(list)) {
        for (let i = 0, len = list.length; i < len; i++) {
            newList.push(callbackfn(list[i], i, list)); //
        }
        return newList
    } else {
        for (let key in list) {
            if (list.hasOwnProperty(key)) newList.push(callbackfn(list[key], key, list)) //
        }
        return newList;
    }
}

export function each(
    list: any,
    callbackfn: (value: any, index: number | string, array: any[]) => void
) {
    if (isArrayLike(list)) {
        for (let i = 0, len = list.length; i < len; i++) {
            callbackfn(list[i], i, list)
        }
    } else {
        for (let key in list) {
            if (list.hasOwnProperty(key)) callbackfn(list[key], key, list);
        }
    }
}