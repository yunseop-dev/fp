import rest from "./rest";

export default function rester(func: Function, num?: number) {
    return function () {
        return func.apply(func, rest(arguments, num))
    }
};
