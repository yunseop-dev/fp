export default function compose(...funcs: Array<Function>) {
    let start = funcs.length - 1;
    return function (...args: any[]) {
        let i = start;
        let result = funcs[start].apply(this, args);
        while(i--) result = funcs[i].call(this, result);
        return result;
    }
}

const constant = <T>(v: T) => () => v;
let foo = constant('foo'); // () => string

foo = () => 'bar'

console.log(foo())
