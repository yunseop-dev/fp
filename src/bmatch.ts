function object(key: string, value: any) {
    let obj: any = {};
    obj[key] = value;
    return obj;
}

function match(obj: any, obj2: any) {
    for (let key in obj2) {
        if (obj[key] !== obj2[key]) return false;
    }
    return true;
}

export default function bmatch(obj2: any, val?: any) {
    if (arguments.length == 2) obj2 = object(obj2, val);
    return function (obj: any) {
        return match(obj, obj2);
    }
}
