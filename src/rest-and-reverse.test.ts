import { describe, expect, test } from '@jest/globals';
import rest from './rest';
import reverse from './reverse';

describe('Lodash', () => {
  describe('rest()', () => {
    test('should return [2, 3] when passed [1, 2, 3]', () => {
      expect(rest([1, 2, 3])).toEqual([2, 3]);
    });

    test('should return [100, 1000] when passed {0: 1, 1: 10, 2: 100, 3: 1000, length: 4}, 2', () => {
      expect(rest({0: 1, 1: 10, 2: 100, 3: 1000, length: 4}, 2)).toEqual([100, 1000]);
    });
  });

  describe('reverse()', () => {
    test('should return [3, 2, 1] when passed [1, 2, 3]', () => {
      expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
    });

    test('should return [] when passed {}', () => {
      expect(reverse({})).toEqual([]);
    });

    test('should return [] when passed null', () => {
      expect(reverse(null)).toEqual([]);
    });

    test('should return [100, 10, 1] when passed {0: 1, 1: 10, 2: 100, 3: 1000, length: 4} after reverse()', () => {
      expect(rest(reverse({0: 1, 1: 10, 2: 100, 3: 1000, length: 4}))).toEqual([100, 10, 1]);
    });
  });
});