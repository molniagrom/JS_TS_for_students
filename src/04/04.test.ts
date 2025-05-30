import {expect, test} from "vitest";

test("should take old men older then 90", () => {
    const ages = [35, 85, 90, 14, 48, 28]

    const oldAges = ages.filter(ag => ag > 70);

    expect(oldAges.length).toBe(2)
    expect(oldAges[0]).toBe(85)
    expect(oldAges[1]).toBe(90)
})

test("should take courses chipper", () => {
    const courses = [
        { title: "CSS", price: 110 },
        { title: "JS", price: 200 },
        { title: "REACT", price: 150 }
    ];

    const coursesChipper = courses.filter(c => c.price < 160);

    expect(coursesChipper.length).toBe(2)
    expect(coursesChipper[0].price).toBe(110)
    expect(coursesChipper[1].price).toBe(150)
    expect(coursesChipper[1].title).toBe("REACT")
})

test("get only completed tasks", () => {
   const tasks = [
       {id: 1, title: "Bread", isDode: false },
       {id: 2, title: "Milk", isDode: true },
       {id: 3, title: "Salt", isDode: false },
       {id: 4, title: "Cheese", isDode: true },
   ]

    const completed = tasks.filter(task => task.isDode)

    expect(completed[0].title).toBe("Milk")
    expect(completed[0].id).toBe(2)
    expect(completed[0].isDode).toBe(true)
})
test("get only unCompleted tasks", () => {
   const tasks = [
       {id: 1, title: "Bread", isDode: false },
       {id: 2, title: "Milk", isDode: true },
       {id: 3, title: "Salt", isDode: false },
       {id: 4, title: "Cheese", isDode: true },
   ]

    const completed = tasks.filter(task => !task.isDode)

    expect(completed[0].title).toBe("Bread")
    expect(completed[0].id).toBe(1)
    expect(completed[0].isDode).toBe(false)
})