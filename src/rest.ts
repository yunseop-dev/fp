import toArray from "./toArray";

export default function rest(value: any, num?: number): any[] {
    return toArray(value).slice(num || 1)
}
