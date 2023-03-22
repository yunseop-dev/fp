import falsy from "./falsy";
import filter from "./filter";
import find from "./find";
import identity from "./identity";

export default function every<T>(list: T[]) {
    return filter(list, falsy).length == 0

}
