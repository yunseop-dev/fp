import identity from "./identity";
import iff from "./if";
import values from "./values";

// export default function toArray(value: any): any[] {
//     // return Array.isArray(value) ? value : values(value)
//     return iff(Array.isArray, constant(value), values(value));
// }

const toArray = iff(Array.isArray, identity, values)

export default toArray;