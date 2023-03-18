import { describe, expect, test } from '@jest/globals';
import findIndex from './findIndex';
import bmatch from './bmatch';
import { users } from './constants/users.constants';

describe('find', () => {
    test('returns value properly', () => {
        expect(
            findIndex(users, bmatch({ name: 'JM', age: 32 }))
        ).toBe(5);
    });

    test('returns value properly', () => {
        expect(
            findIndex(users, bmatch({ age: 36 }))
        ).toBe(-1);
    });
});
