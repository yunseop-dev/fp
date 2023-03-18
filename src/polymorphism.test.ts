import { describe, expect, test } from '@jest/globals';
import map from './map';
import filter from './filter';
import { users } from './constants/users.constants';

function User(id: number, name: string, age: number) {
    this.getId = function () {
        return id;
    };
    this.getName = function () {
        return name;
    };
    this.getAge = function () {
        return age;
    };
}

var users2 = [
    new User(1, "ID", 32),
    new User(2, "HA", 25),
    new User(3, "BJ", 32),
    new User(4, "PJ", 28),
    new User(5, "JE", 27),
    new User(6, "JM", 32),
    new User(7, "HI", 24)
];

describe('polymorphism', () => {
    test('returns value properly', () => {
        expect(
            map(
                filter(users, function (u) { return u.age >= 30 }),
                function (u) { return u.name; }
            )
        ).toBe('HA');
    });

    test('returns value properly', () => {
        expect(map(
            filter(users2, function (u) { return u.getAge() >= 30 }),
            function (u) { return u.getName(); })
        ).toBe(["ID", "BJ", "JM"]);
    });
});
