import { describe, expect, test } from '@jest/globals';
import match from './match';
import bmatch from './bmatch';
import find from './find';
import { users } from './constants/users.constants';

describe('filter', () => {
    test('returns length properly', () => {
        expect(
            match(find(users, bmatch('id', 3)), find(users, bmatch('name', 'BJ')))
        ).toBeTruthy()
    });

    test('returns length properly', () => {
        expect(
            find(users, bmatch({ name: 'JM', age: 32 }))
        ).toEqual({ id: 6, name: "JM", age: 32 })
    });
});
