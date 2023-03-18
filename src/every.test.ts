import every from './every';

describe('every', () => {
    test('should return true when all values are truthy', () => {
        expect(every([{}, true, 2])).toBe(true);
        expect(every([1, 'hello', true])).toBe(true);
    });

    test('should return false when at least one falsy value is in the list', () => {
        expect(every([0, null, 2])).toBe(false);
        expect(every([{}, true, 0])).toBe(false);
    });
});