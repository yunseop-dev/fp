import { describe, expect, test } from '@jest/globals';
import find from './find';
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

describe('find', () => {
    test('returns value properly', () => {
        expect(find(users2, function (u) { return u.getAge() == 25 }).getName()).toBe('HA');
    });

    test('returns object properly', () => {
        expect(
            find(users, function (u) { return u.name.indexOf('P') != -1 })
        ).toEqual({ id: 4, name: "PJ", age: 28 });
    });

    test('returns object properly', () => {
        expect(
            find(users, function (u) { return u.age == 32 && u.name == 'JM' })
        ).toEqual({ id: 6, name: "JM", age: 32 });
    });

    test('returns object properly', () => {
        expect(
            find(users2, function(u) { return u.getAge() < 30 }).getName()
        ).toBe('HA');
    });
});
