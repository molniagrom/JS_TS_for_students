import {beforeEach, expect, test} from "vitest";
import {ManType} from "./07";

let man: ManType;
beforeEach(() => {
    man = {
        name: "Alina",
        age: 17,
        lessons: [
            {title: "1"},
            {title: "2"},
            {title: "3"},
            {title: "4"},
        ],
        address: {
            street: {
                title: "Street",
            }
        }
    }
})

test("", () => {

    // const a = man.age;
    // const l = man.lessons;

    const {age, lessons} = man;
    const { title } = man.address.street;

    expect(age).toBe(17)
    expect(lessons.length).toBe(4)

    expect(title).toBe("Street")
})

test("", () => {

    const {age, lessons} = man;
    const [ title1,,title3, ...rest ] = man.lessons;

    expect(age).toBe(17)
    expect(lessons.length).toBe(4)

    expect(title1.title).toBe("1")
    expect(title3.title).toBe("3")
    expect(rest.length).toBe(1)
})


