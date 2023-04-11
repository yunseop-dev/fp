// getLength
// isArrayLike 사용

import array from "./array";
import identity from "./identity";
import noop from "./noop";
import push_to from "./push_to";
import { keys } from "./values";

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

export function bloop(newData: any, body: any, stopper?: any) {
    return function (data: any, iteratee: any) {
        const result = newData(data);
        let memo;
        if (isArrayLike(data)) {
            for (let i = 0, len = data.length; i < len; i++) {
                memo = iteratee(data[i], i, data);
                if (!stopper) body(memo, result, data[i])
                else if (stopper(memo)) return body(memo, result, data[i], i);
            }
        } else {
            for (let i = 0, keyss = keys(data), len = keyss.length; i < len; i++) {
                memo = iteratee(data[keyss[i]], keyss[i], data);
                if (!stopper) body(memo, result, data[keyss[i]], keyss[i]);
                else if (stopper(memo)) return body(memo, result, data[keyss[i]], keyss[i]);
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