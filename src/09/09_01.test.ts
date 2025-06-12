import {beforeEach, expect, test} from "vitest";
import {UserType} from "./09_01";

function icreaseAge(u: UserType) {
    return u.age++
}

test("reference type obj test", () => {
    const user: UserType = {
        name: "John",
        age: 4,
        address: {
            title: "Minsk"
        }
    }

    icreaseAge(user)

    expect(user.age).toBe(5);

    const superMan = user
    superMan.age = 1000

    expect(user.age).toBe(1000);
    expect(superMan.age).toBe(1000);
})
test("big arr test", () => {
    const users: UserType[] = [
        {
            name: "John",
            age: 4,
            address: {
                title: "Minsk"
            }
        },
        {
            name: "John",
            age: 4,
            address: {
                title: "Minsk"
            }
        },
    ]

    const admins = users
    // admins.push({name: "Bandugan", age: 3})
    // expect(users[2]).toEqual({name: "Bandugan", age: 3})

})
test("value type test", () => {
    const usersCount = 100;

    let adminsCount = usersCount
    expect(adminsCount).toBe(100)

    adminsCount++;

    expect(adminsCount).toBe(101)
    expect(usersCount).toBe(100)

})
test("reference type obj test", () => {
    const user: UserType = {
        name: "John",
        age: 4,
        address: {
            title: "Minsk"
        }
    }

    const user2: UserType = {
        name: "John",
        age: 4,
        address: user.address
    }

    user2.address.title = "Kanary"

    expect(user.address.title).toBe("Kanary")

})

test("reference type arr test", () => {
   const address = {
       title: "Minsk"
   }

    const user: UserType = {
        name: "John",
        age: 4,
        address: address
    }

    const user2: UserType = {
        name: "John",
        age: 4,
        address: address
    }

    const users = [user, user2, {name: "Katya", age: 14, address: address}]

    const admins = users
    admins[0].name = "Misha"

    expect(users[0].name).toBe("Misha")
    expect(user.name).toBe("Misha")

})
