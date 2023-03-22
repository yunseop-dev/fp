import { describe, expect, test } from '@jest/globals';
import truthy from './truthy';

describe('truthy', () => {
    test('returns value properly', () => {
        expect(truthy(1)).toBeTruthy();
        expect(truthy([])).toBe(true);
        expect(truthy({})).toBe(true);
        expect(truthy('1')).toBe(true);
        expect(truthy(0)).toBe(false);
        expect(truthy('')).toBe(false);
    });
});
