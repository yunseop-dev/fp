import constant from "./constant";
import identity from "./identity";
import { bloop } from "./map";
import rester from "./rester";

// export default function <T>(
//     list: T[],
//     predicate: (value: T, index: number, obj: T[]) => boolean
// ): number {
//     for (let i = 0, len = list.length; i < len; i++) {
//         if (predicate(list[i], i, list)) {
//             return i
//         }
//     }
//     return -1;
// }

const findIndex = bloop(
    constant(-1),
    rester(identity, 3),
    identity
)
export default findIndex;
