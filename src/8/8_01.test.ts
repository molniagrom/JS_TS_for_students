import { usersObj } from './8';
import { beforeEach, expect, test } from "vitest";

type UserType = {
    [key: string]: { id: number, name: string }
}

let users: UserType = {};


beforeEach(() => {
     users = {
        "101": {id: 101, name: 'Dimych'},
        "3232312": {id: 3232312, name: 'Natasha'},
        "1212": {id: 1212, name: 'Valera'},
        "1": {id: 1, name: 'Katya'},
    };});

test('should select corresponding user from obj', () => {
    users["1"].name = "Ekaterina"

    expect(users["1"].name).toBe('Ekaterina');
});

test('should delete corresponding user from obj', () => {
    delete users["1"]

    expect(users["1"]).toBeUndefined();
});
