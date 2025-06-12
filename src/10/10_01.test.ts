import { beforeEach, expect, test } from "vitest";
import {
    addBookToUser,
    addCompanyToUser,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse,
    removeBookToUser,
    updateBookToUser,
    updateCompany,
    updateCompanyTitle,
    upgradeUserLaptop,
    UserType,
    UserWithBooks,
    UserWithCompaniesType,
    UserWithLaptopType
} from "./10_01";

test("reference type obj test", () => {
    const user: UserType = {
        name: "John",
        hair: 10,
        address: {
            city: "Minsk"
        }
    };

    const cutUser = makeHairStyle(user, 2);

    expect(user.hair).toBe(10);
    expect(cutUser.hair).toBe(5);
});

test("reference type obj test", () => {
    const user: UserWithLaptopType = {
        name: "John",
        hair: 10,
        address: {
            city: "Minsk",
            house: 12,
        },
        laptop: {
            title: "HP"
        }
    };

    const movedUser = moveUser(user, "Kiew");

    expect(user).not.toBe(movedUser);
    expect(user.address).not.toBe(movedUser.address);
    expect(movedUser.address.city).toBe("Kiew");
    expect(user.address.city).toBe("Minsk");
    expect(user.laptop).toBe(movedUser.laptop);
});

test("upgrade laptop test", () => {
    const user: UserWithLaptopType = {
        name: "John",
        hair: 10,
        address: {
            city: "Minsk",
            house: 12,
        },
        laptop: {
            title: "HP"
        }
    };

    const movedUser = upgradeUserLaptop(user, "mackBook");

    expect(user).not.toBe(movedUser);
    expect(user.address).toBe(movedUser.address);
    expect(user.laptop).not.toBe(movedUser.laptop);
    expect(user.laptop.title).toBe("HP");
    expect(movedUser.laptop.title).toBe("mackBook");
});

test("change number to house", () => {
    const user: UserWithLaptopType & UserWithBooks = {
        name: "John",
        hair: 10,
        address: {
            city: "Minsk",
            house: 12,
        },
        laptop: {
            title: "HP"
        },
        books: ["css", "js", "react"],
    };

    const movedToOtherHouse = moveUserToOtherHouse(user, 99);

    expect(user).not.toBe(movedToOtherHouse);
    expect(user.address).not.toBe(movedToOtherHouse.address);
    expect(user.laptop).toBe(movedToOtherHouse.laptop);
    expect(user.books).toBe(movedToOtherHouse.books);
});

test("add new books to user", () => {
    const user: UserWithLaptopType & UserWithBooks = {
        name: "John",
        hair: 10,
        address: {
            city: "Minsk",
            house: 12,
        },
        laptop: {
            title: "HP"
        },
        books: ["css", "js", "react"],
    };

    const userWithNewBook = addBookToUser(user, ["html", "rest-api"]);

    expect(user).not.toBe(userWithNewBook);
    expect(user.address).toBe(userWithNewBook.address);
    expect(user.laptop).toBe(userWithNewBook.laptop);
    expect(user.books).not.toBe(userWithNewBook.books);
    expect(userWithNewBook.books[3]).toBe("html");
    expect(userWithNewBook.books[4]).toBe("rest-api");
});

test("update books to user", () => {
    const user: UserWithLaptopType & UserWithBooks = {
        name: "John",
        hair: 10,
        address: {
            city: "Minsk",
            house: 12,
        },
        laptop: {
            title: "HP"
        },
        books: ["css", "js", "react"],
    };

    const userWithUpdateBook = updateBookToUser(user, "js", "ts");

    expect(user).not.toBe(userWithUpdateBook);
    expect(user.address).toBe(userWithUpdateBook.address);
    expect(user.laptop).toBe(userWithUpdateBook.laptop);
    expect(user.books).not.toBe(userWithUpdateBook.books);
    expect(user.books[1]).toBe("js");
});

test("remove book to user", () => {
    const user: UserWithLaptopType & UserWithBooks = {
        name: "John",
        hair: 10,
        address: {
            city: "Minsk",
            house: 12,
        },
        laptop: {
            title: "HP"
        },
        books: ["css", "js", "react"],
    };

    const userRemoveBook = removeBookToUser(user, "js");

    expect(user).not.toBe(userRemoveBook);
    expect(user.address).toBe(userRemoveBook.address);
    expect(user.laptop).toBe(userRemoveBook.laptop);
    expect(user.books).not.toBe(userRemoveBook.books);
    expect(user.books.length).toBe(3);
    expect(userRemoveBook.books.length).toBe(2);
});

test("add company to user", () => {
    const user: UserWithCompaniesType & UserWithBooks = {
        name: "John",
        hair: 10,
        address: {
            city: "Minsk",
            house: 12,
        },
        books: ["css", "js", "react"],
        companies: [
            { id: 1, title: "Microsoft" },
            { id: 2, title: "Apple" },
        ],
    };

    const addCompany = addCompanyToUser(user, { id: 3, title: "Samsung" });

    expect(user).not.toBe(addCompany);
    expect(user.address).toBe(addCompany.address);
    expect(user.companies).not.toBe(addCompany.companies);
    expect(addCompany.companies.length).toBe(3);
});

test("update company title to user", () => {
    const user: UserWithCompaniesType & UserWithBooks = {
        name: "John",
        hair: 10,
        address: {
            city: "Minsk",
            house: 12,
        },
        books: ["css", "js", "react"],
        companies: [
            { id: 1, title: "Майкрософт" },
            { id: 2, title: "Apple" },
        ],
    };

    const updateCompanyTitleUser = updateCompanyTitle(user, 1, "Microsoft");

    expect(user).not.toBe(updateCompanyTitleUser);
    expect(user.address).toBe(updateCompanyTitleUser.address);
    expect(user.companies).not.toBe(updateCompanyTitleUser.companies);
    expect(user.companies[0].title).toBe("Майкрософт");
    expect(updateCompanyTitleUser.companies[0].title).toBe("Microsoft");
});

test("update company", () => {
    let companies = {
        Alina: [
            { id: 1, title: "Майкрософт" },
            { id: 2, title: "Apple" },
        ],
        Artyem: [
            { id: 1, title: "IT-INCUBATOR" }
        ]
    };

    let companiesCopy = updateCompany(
        companies,
        "Alina",
        1,
        "WEB-delo"
    );

    expect(companiesCopy["Alina"][0].title).toBe("WEB-delo");
    expect(companiesCopy["Alina"]).toBe(companies["Alina"]);
    expect(companies["Alina"][0].title).toBe("Майкрософт");
});
