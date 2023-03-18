import { describe, expect, test } from '@jest/globals';
import map from './map';
import filter from './filter';
import { users } from './constants/users.constants';

describe('overlapping functions', () => {
    test('returns array properly', () => {
        const ages = map(filter(users, function (user) { return user.age < 30 }), function (user) { return user.age; });
        expect(ages).toBe([25, 28, 27, 24])
        expect(ages.length).toBe(4)
    })

    test('returns array properly', () => {
        const names = map(
            filter(users, function (user) { return user.age >= 30 }),
            function (user) { return user.name; });

        expect(names).toBe(["ID", "BJ", "JM"])
        expect(names.length).toBe(3)
    })
})
