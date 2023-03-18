import { describe, expect, test } from '@jest/globals';
import filter from './filter';
import identity from './identity';

describe('filter', () => {
    test('returns value properly', () => {
        expect(
            filter([true, 0, 10, 'a', false, null], identity)
        ).toBe([true, 10, 'a']);
    });
});
