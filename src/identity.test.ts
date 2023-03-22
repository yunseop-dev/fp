import { describe, expect, test } from '@jest/globals';
import filter from './filter';
import identity from './identity';

describe('filter', () => {
    test('returns value properly', () => {
        expect(
            // @ts-ignore;
            filter([true, 0, 10, 'a', false, null], identity)
        ).toEqual([true, 10, 'a']);
    });
});
