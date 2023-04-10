import { describe, expect, test } from '@jest/globals';
import map, { map2 } from './map';
import filter from './filter';
import { users } from './constants/users.constants';

describe("filter users", () => {
    // test("should return users under 30", () => {
    //     const users_under_30 = filter(users, (user) => user.age < 30);
    //     expect(users_under_30.length).toBe(4);

    //     const ages = map(users_under_30, (user) => user.age);
    //     expect(ages).toEqual([25, 28, 27, 24]);
    // });

    // test("should return users over 30", () => {
    //     const users_over_30 = filter(users, (user) => user.age >= 30);
    //     expect(users_over_30.length).toBe(3);

    //     const names = map(users_over_30, (user) => user.name);
    //     expect(names).toEqual(["ID", "BJ", "JM"]);
    // });

    test("ArrayLike test 1", () => {
        expect(map2([1, 2, 3], function (v) {
            return v * 2
        })).toEqual([2, 4, 6])
    });

    test("ArrayLike test 2", () => {
        expect(map2({ a: 3, b: 2, c: 1 }, function (v) {
            return v * 2
        })).toEqual([6, 4, 2])
    });

    test("ArrayLike test 3", () => {
        var list1 = {};
        list1[0] = 1, list1[1] = 2, list1[2] = 3, list1.length = 3;
        list1.pop = function () {
            delete this[this.length];
        };
        expect(map2(list1, function (v) {
            return v * 2
        })).toEqual([2, 4, 6])
    });

    test("bind test", () => {
        expect(map2([1, 2, 3], function (v) {
            return v * this;
        }.bind(5))).toEqual([5, 10, 15])
    });
});