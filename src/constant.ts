export default function constant(v) {
    return function () {
        return v;       
    }
}