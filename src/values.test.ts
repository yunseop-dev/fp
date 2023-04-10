import { describe, expect, test } from '@jest/globals';
import { each } from './map';
import values, { keys } from './values';

describe("values", () => {
    test("test 1", () => {
        expect(values({ id: 5, name: "JE", age: 27 })).toEqual([5, "JE", 27])
    });

    test("test 1", () => {
        // [Array(1), undefined, NaN]
        expect(values({ id: [5], name: undefined, age: NaN })).toEqual([[5], undefined, NaN])
    });
});

describe("keys", () => {
    test("test 1", () => {
        expect(keys({ id: 5, name: "JE", age: 27 })).toEqual([
            'id', 'name', 'age'
        ])
    });

    test("test 2", () => {
        expect(keys({ '____hello world': 5, name: "JE", age: 27 })).toEqual([
            '____hello world', 'name', 'age'
        ])
    });

    test("test 3", () => {
        expect(keys(['a', 'b', undefined, NaN])).toEqual([
            0, 1, 2, 3
        ])
    });
});

describe("each", () => {
    test("test 1", () => {
        each({ id: 5, name: "JE", age: 27 }, function (value, index, array) {
            console.log(value, index);
        })
    });
});

// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/underscore/index.d.ts
