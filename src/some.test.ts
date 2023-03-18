import some from './some';

describe('some', () => {
    test('should return true when at least one truthy value is in the list', () => {
        expect(some([0, null, 2])).toBe(true);
        expect(some([1, null, false])).toBe(true);
        expect(some(['', 0, false, true])).toBe(true);
    });

    test('should return false when no truthy value is in the list', () => {
        expect(some([null, undefined, false])).toBe(false);
        expect(some([0, '', undefined])).toBe(false);
    });
});
