import findKey from './findKey';

describe("findKey", () => {
    const object = { id: 4, name: "PJ", age: 28 };
  
    test("finds first key whose value is a string", () => {
      const result = findKey(object, function(val) { return typeof val == "string"; });
      expect(result).toBe("name");
    });
  
    test("returns undefined if no key's value is an array", () => {
      const result = findKey(object, Array.isArray);
      expect(result).toBeUndefined();
    });
  
    test("returns undefined if object is empty", () => {
      const result = findKey({}, Array.isArray);
      expect(result).toBeUndefined();
    });
  });