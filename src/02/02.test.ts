import {describe, test, expect, beforeEach} from "vitest";
import {student as initialStudent} from "./02"; // путь к объекту student
import type {StudentProps} from "./02";

let student: StudentProps;

beforeEach(() => {
    // создаем глубокую копию, чтобы тесты не портили начальные данные
    student = JSON.parse(JSON.stringify(initialStudent));
});

describe("Student Object", () => {
    test("should have correct name and age", () => {
        expect(student.name).toBe("Alina");
        expect(student.age).toBe(17);
    });

    test("should be active and like spaghetti", () => {
        expect(student.isActive).toBe(true);
        expect(student.favoriteFoot).toBe("spaghetti");
    });

    test("should have correct address", () => {
        expect(student.address.city).toBe("Tiraslol");
        expect(student.address.street).toBe("Gorikogo");
        expect(student.address.country).toBe("Transnistria");
    });

    test("should have 3 technologies", () => {
        expect(student.technologies).toHaveLength(3);
    });

    test("should contain React in technologies", () => {
        const titles = student.technologies.map(t => t.title);
        expect(titles).toContain("React");
    });

    test("should allow updating city", () => {
        student.address.city = "Chisinau";
        expect(student.address.city).toBe("Chisinau");
    });

    test("modifying technologies should not affect initialStudent", () => {
        student.technologies.push({id: 4, title: "TypeScript"});
        expect(student.technologies).toHaveLength(4);
        expect(initialStudent.technologies).toHaveLength(3);
    });
});
