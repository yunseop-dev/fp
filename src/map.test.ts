import { describe, expect, test } from '@jest/globals';
import map from './map';
import filter from './filter';
import { users } from './constants/users.constants';

describe("filter users", () => {
    test("should return users under 30", () => {
        const users_under_30 = filter(users, (user) => user.age < 30);
        expect(users_under_30.length).toBe(4);

        const ages = map(users_under_30, (user) => user.age);
        expect(ages).toEqual([25, 28, 27, 24]);
    });

    test("should return users over 30", () => {
        const users_over_30 = filter(users, (user) => user.age >= 30);
        expect(users_over_30.length).toBe(3);

        const names = map(users_over_30, (user) => user.name);
        expect(names).toEqual(["ID", "BJ", "JM"]);
    });
});