export default function beq(a: any) {
    return function (b: any) {
        return a === b;
    }
}
