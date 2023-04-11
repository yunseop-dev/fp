import { describe, expect, test } from '@jest/globals';
import reject from './reject';

describe('reject', () => {
    test('returns value properly', () => {
        expect(
            reject([1, 2, 3, 4], function (val, idx) {
                return idx > 1;
            })
        ).toEqual([1, 2]);
        
        expect(
            reject([1, 2, 3, 4], function (val) {
                return val > 1;
            })
        ).toEqual([1]);
    });

    test('오브젝트를 넣어서 배열로 반환도 가능하다', () => {
        expect(reject({ a: 1, b: 2 }, function (val) {
            return val >= 1
        })).toEqual([])
    })
});
