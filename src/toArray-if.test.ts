import toArray from './toArray';
import iff from './if';
import isNumber from './isNumber';

describe('Lodash', () => {
    describe('toArray()', () => {
      test('should convert an array-like object to an array', () => {
        expect(toArray([1, 2, 3])).toEqual([1, 2, 3]);
        expect(toArray({0: 1, 1: 10, 2: 100, 3: 1000, length: 4})).toEqual([1, 10, 100, 1000]);
      });
    });
  
    describe('iff()', () => {
      test('should return the result of `func` when `validator` returns true', () => {
        const square = iff(
          a => toString.call(a) == '[object Number]',
          a => a * a,
          () => 0
        );
        expect(square(5)).toEqual(25);
      });
  
      test('should return the result of `alter` when `validator` returns false and `alter` is provided', () => {
        const square = iff(
          a => toString.call(a) == '[object Number]',
          a => a * a,
          () => 0
        );
        expect(square("가나다")).toEqual(0);
      });
    });
  
    describe('safety()', () => {
      test('should return the result of `func` when `validator` returns true', () => {
        const square = iff(isNumber, a => a * a, () => 0);
        expect(square(5)).toEqual(25);
      });
  
      test('should return the result of `alter` when `validator` returns false and `alter` is provided', () => {
        const square = iff(isNumber, a => a * a, () => 0);
        expect(square("가나다")).toEqual(0);
      });
    });
  });