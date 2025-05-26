
type AddressType = {
    city: string,
    street: string,
    country: string,
}

type TechType = {
    id: number,
    title: string,
}

export type StudentProps = {
    name: string;
    age: number;
    favoriteFoot: string,
    isActive: boolean,
    address: AddressType,
    technologies: Array<TechType>,
}

export const student: StudentProps = {
    name: "Alina",
    age: 17,
    favoriteFoot: "spaghetti",
    isActive: true,
    address: {
        city: "Tiraslol",
        street: "Gorikogo",
        country: "Transnistria",
    },
    technologies: [
        {
            id: 1,
            title: "JS",
        },{
            id: 2,
            title: "React",
        },{
            id: 3,
            title: "HTML",
        },
    ]
}

console.log(student)