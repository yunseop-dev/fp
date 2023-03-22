import { describe, expect, test } from '@jest/globals';
import falsy from './falsy';

describe('falsy', () => {
    test('returns value properly', () => {
        expect(falsy(0)).toEqual(true);
        expect(falsy(undefined)).toEqual(true);
    });
});
