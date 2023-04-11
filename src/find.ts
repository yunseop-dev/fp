import identity from "./identity";
import iff from "./if";
import { bloop } from "./map";
import noop from "./noop";

const find = bloop(
    noop,
    function (bool, result, val) {
        console.log('arguments', arguments);
        return val
    },
    identity,
)

export default find;