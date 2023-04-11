import array from "./array"
import identity from "./identity";
import iff from "./if";
import { bloop, each } from "./map"
import noop from "./noop";
import push_to from "./push_to";
import rester from "./rester";

// export default function filter(
//     list: any,
//     predicate: (value: any, index: any, array: any[]) => value is any): any[] {
//     const newList: any[] = [];
//     each(list, function (value, index, array) {
//         if (predicate(value, index, list)) {
//             newList.push(value)
//         }
//     })
//     return newList
// }

const filter = bloop(array, iff(identity, rester(push_to), noop))

export default filter;