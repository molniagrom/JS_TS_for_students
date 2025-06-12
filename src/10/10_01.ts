export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

type LaptopType = {
    title: string
}

type CompanyType = { id: number; title: string };

type CompaniesType = {
    [userName: string]: CompanyType[];
};

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooks = UserType & {
    books: Array<string>
}

export type UserWithCompaniesType = {
    companies: CompanyType[]
}

export function makeHairStyle(u: UserType, power: number) {
    return {
        ...u,
        hair: u.hair / power
    }
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city,
        },
    }
}

export function upgradeUserLaptop(u: UserWithLaptopType, title: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: title,
        },
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooks, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house,
        },
    }
}

export function addBookToUser(u: UserWithLaptopType & UserWithBooks, newBook: string[]) {
    return {
        ...u,
        books: [...u.books, ...newBook],
    }
}

export function updateBookToUser(u: UserWithLaptopType & UserWithBooks, findValue: string, updateValue: string) {
    return {
        ...u,
        books: u.books.map(b => b === findValue ? updateValue : b),
    }
}

export function removeBookToUser(u: UserWithLaptopType & UserWithBooks, removeBook: string) {
    return {
        ...u,
        books: u.books.filter(b => b !== removeBook),
    }
}

export function addCompanyToUser(u: UserWithCompaniesType & UserWithBooks, company: { id: number, title: string }) {
    return {
        ...u,
        companies: [...u.companies, company],
    }
}

export function updateCompanyTitle(u: UserWithCompaniesType & UserWithBooks, companyId: number, updateTitle: string) {
    return {
        ...u,
        companies: u.companies.map(c => c.id === companyId
            ? { ...c, title: updateTitle }
            : c),
    }
}

export function updateCompany(
    companies: CompaniesType,
    userName: string,
    id: number,
    title: string,
) {
    return {
        ...companies,
        [userName]: companies[userName].map(c => c.id === id
            ? { ...c, title: title } : c),
    }
}
