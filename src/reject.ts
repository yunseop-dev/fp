import array from "./array"
import identity from "./identity"
import iff from "./if"
import { bloop } from "./map"
import noop from "./noop"
import not from "./not"
import push_to from "./push_to"
import rester from "./rester"

// const reject = bloop(array, iff(not, rester(push_to), noop))
const reject = bloop(array, iff(identity, noop, rester(push_to)))

export default reject