import find from "./find";
import identity from "./identity";

export default function positive<T>(list: T[]) {
  return find(list, identity);
}
