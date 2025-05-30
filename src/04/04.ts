const ages = [35, 65, 90, 14, 48, 28]

const predicate = (age: number) => {
    return age > 70;
};

const oldAges = [90]; // > 70

type CourseType = {
    title: string;
    price: number;
};

const courses = [
    { title: "CSS", price: 110 },
    { title: "JS", price: 200 },
    { title: "REACT", price: 150 }
];

// < 160
const chipPredicate = (course: CourseType) => {
    return course.price < 160;
};

const chipCourses = [
    { title: "CSS", price: 110 },
    { title: "REACT", price: 150 }
];
