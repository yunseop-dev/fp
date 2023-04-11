import identity from "./identity";
import { bloop } from "./map";
import noop from "./noop";
import rester from "./rester";

const findKey = bloop(
    noop,
    rester(identity, 3),
    identity,
)

export default findKey;
