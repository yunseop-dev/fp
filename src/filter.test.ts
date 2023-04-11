import { describe, expect, test } from '@jest/globals';
import filter from './filter';
import { users } from './constants/users.constants';

describe('filter', () => {
    test('returns length properly', () => {
        expect(filter(users, function (user) { return user.age < 30 }).length).toBe(4);
    });

    test('returns length properly', () => {
        expect(filter(users, function (user) { return user.age >= 30 }).length).toBe(3);
    });

    test('returns value properly', () => {
        expect(
            filter([1, 2, 3, 4], function (val, idx) {
                return idx > 1;
            })
        ).toEqual([3, 4]);
    });

    test('오브젝트를 넣어서 배열로 반환도 가능하다', () => {
        expect(filter({ a: 1, b: 2 }, function (val) {
            return val >= 1
        })).toEqual([1, 2])
    })
});
