import not from "./not";
import positive from "./positive";

export default function some<T>(list: T[]) {
    return not(not(positive(list)))
}
