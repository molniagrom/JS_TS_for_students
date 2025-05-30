import {beforeEach, expect, test} from "vitest";
import {StudentProps} from "../02/02";
import {addSkill, isLiveInCity, makeStudentActive} from "./03";

let student: StudentProps
beforeEach(() => {
    student = {
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
            }, {
                id: 2,
                title: "React",
            }, {
                id: 3,
                title: "HTML",
            },
        ]
    }
})

test("new tech skill should be added to student", () => {
    expect(student.technologies.length).toBe(3)


    addSkill(student, "js")

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("js")
    expect(student.technologies[3].id).toBeDefined()

})
test("student should be active", () => {

    makeStudentActive(student)

    expect(student.isActive).toBe(true)
})

test("Does the student live in the city?", () => {

    expect(isLiveInCity(student, "Tiraslol")).toBe(true)
    expect(isLiveInCity(student, "Moscow")).toBe(false)
})


















