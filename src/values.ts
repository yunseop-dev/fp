import identity from "./identity";
import map from "./map";

export default function values(obj: any) {
    return map(obj, identity)
}

const args0 = identity;

function args1(v: any, w: any) {
    return w;
}

export function keys(obj: any) {
    return map(obj, args1)
}
