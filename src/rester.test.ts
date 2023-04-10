import rester from './rester';
function sum(a, b, c, d) {
    return (a || 0) + (b || 0) + (c || 0) + (d || 0);
  }

describe('Lodash', () => {
    describe('rester()', () => {
      test('should return a new function that returns the correct sum when called with all arguments', () => {
        const resterSum = rester(sum);
        expect(resterSum(1, 2, 3, 4)).toEqual(9);
      });
  
      test('should return a new function that returns the correct sum when called with some arguments', () => {
        const resterSum = rester(sum, 2);
        expect(resterSum(1, 2, 3, 4)).toEqual(7);
      });
  
      test('should return a new function that returns the correct sum when called with fewer arguments', () => {
        const resterSum = rester(sum, 3);
        expect(resterSum(1, 2, 3, 4)).toEqual(4);
      });
    });
  });