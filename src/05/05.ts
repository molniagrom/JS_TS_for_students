export type ManType = {
    name: string,
    age: number,
}


const people: Array<ManType> = [
    {name: "John Green", age: 33},
    {name: "Alexander Petrov", age: 24},
    {name: "Dmitry Sidorov", age: 18},
]


const Transformer = () => {
    return people.map((item: ManType) => ({
        stack: ["css", "html", "javascript"],
        firstName: item.name.split(" ")[0],
        lastName: item.name.split(" ")[1],
        age: item.age,
    }))
}

const messages = people.map((item: ManType) => `Hello, ${item.name}. We're happy to welcome you!`)

export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map((man: ManType) => `Hello, ${man.name}. We're happy to welcome you!`)
}