import falsy from "./falsy";
import filter from "./filter";

export default function every<T>(list: T[]) {
    return filter(list, falsy).length == 0

}
