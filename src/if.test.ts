import iff from './if';

function sub(a, b) {
    return a - b;
}

describe('Lodash', () => {
    describe('iff()', () => {
        test('should return the result of `func` when `validator` returns true', () => {
            const sub2 = iff(
                (a, b) => a >= b,
                sub,
                () => new Error("a가 b보다 작습니다.")
            );
            expect(sub2(10, 5)).toEqual(5);
        });

        test('should return the result of `alter` when `validator` returns false and `alter` is provided', () => {
            const sub2 = iff(
                (a, b) => a >= b,
                sub,
                () => new Error("a가 b보다 작습니다.")
            );
            expect(() => sub2(2, 5)).toThrow(Error("a가 b보다 작습니다."));
        });

        test('should return the result of `alter` when `validator` returns false and `alter` is provided', () => {
            const diff = iff(
                (a, b) => a >= b,
                sub,
                (a, b) => sub(b, a)
            );
            expect(diff(2, 5)).toEqual(3);
        });
    });
});