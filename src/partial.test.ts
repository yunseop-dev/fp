import partial from './partial';

const abc = function (a, b, c) {
    return a + b + c
}

function add() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}

describe('partial', () => {
    test('returns ', () => {
        const ac = partial(abc, undefined, 'b', undefined);
        expect(ac('a', 'c')).toBe('abc');
    });

    test('returns ', () => {
        const add2 = partial(add, undefined, 2);
        expect(add2(1, 3, 4, 5)).toBe(3);
    });
    
    test('returns ', () => {
        var add3 = partial(add, undefined, undefined, 3, undefined, undefined);
        expect(add3(1, 2, 4, 5)).toBe(15);
        expect(add3(100, 100, 100, 100)).toBe(403);
    });
});
