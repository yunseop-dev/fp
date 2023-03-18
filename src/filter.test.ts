import { describe, expect, test } from '@jest/globals';
import filter from './filter';
import { users } from './constants/users.constants';

describe('filter', () => {
    test('returns length properly', () => {
        expect(filter(users, function (user) { return user.age < 30 }).length).toBe(4);
    });

    test('returns length properly', () => {
        expect(filter(users, function (user) { return user.age < 30 }).length).toBe(3);
    });

    test('returns value properly', () => {
        expect(
            filter([1, 2, 3, 4], function (val, idx) {
                return idx > 1;
            })
        ).toBe([3, 4]);
    });
});
