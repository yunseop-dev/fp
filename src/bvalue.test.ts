import { describe, expect, test } from '@jest/globals';
import map from './map';
import filter from './filter';
import bvalue from './bvalue';
import { users } from './constants/users.constants';

describe('bvalue', () => {
    test('returns array properly', () => {
        const ages = map(
            filter(users, function (user) { return user.age < 30 }),
            bvalue('age')
        );
        expect(ages).toEqual([25, 28, 27, 24])
        expect(ages.length).toBe(4)
        
    })

    test('returns array properly', () => {
        const names = map(
            filter(users, function (user) { return user.age >= 30 }),
            bvalue('name')
        );

        expect(names).toEqual(["ID", "BJ", "JM"])
        expect(names.length).toBe(3)
    })
})