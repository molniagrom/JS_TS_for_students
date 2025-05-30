import {createGreetingMessage, ManType} from "./05";
import {beforeEach, expect, test} from "vitest";

let people: Array<ManType> = []

beforeEach(() => {
    people = [
        {name: "John Green", age: 33},
        {name: "Alexander Petrov", age: 24},
        {name: "Dmitry Sidorov", age: 18},
    ]
})

test("Should get array of greeting message", () => {
    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello, John Green. We're happy to welcome you!")
    expect(messages[1]).toBe("Hello, Alexander Petrov. We're happy to welcome you!")
    expect(messages[2]).toBe("Hello, Dmitry Sidorov. We're happy to welcome you!")
})