// continue array: map, reduce, sort, concat

let students = [
    {
        firstName: 'Nguyen Van',
        lastName: 'A',
        mark: 8
    },
    {
        firstName: 'Le Thi',
        lastName: 'B',
        mark: 9
    },

    {
        firstName: 'Ngo Van',
        lastName: 'C',
        mark: 10
    }
];

// get a list students with fullName
let studentsFullName = students.map(student => {
    return student.firstName + ' ' + student.lastName;
});

console.log('studentsFullName', studentsFullName);

// get a list student with one more attribute: fullName
let addAttributeStudents = students.map(student => {
    // student.fullName = student.firstName + ' ' + student.lastName

    // let newStudent = {
    //     firstName: student.firstName,
    //     lastName: student.lastName,
    //     fullName: student.firstName + " " + student.lastName,
    //     mark: student.mark
    // }

    // spread operator

    let newStudent = {
        ...student,
        fullName: student.firstName + " " + student.lastName
    };

    return newStudent;
});

console.log('studentsFullName', addAttributeStudents);

// reduce
let numbers = [3, 6, 1, 5, 4, 2, 11];
let total = numbers.reduce((previousValue, currentValue, currentIndex) => {
    console.log(previousValue, currentValue, currentIndex);

    return previousValue + currentValue;
}, 0);

console.log(total);

// calculate all odd number
let totalOdd = numbers.reduce((previousValue, currentValue) => {
    if (currentValue % 2 === 1) {
        return previousValue + currentValue;
    }

    return previousValue;
}, 0);

console.log(totalOdd);

// sort
let sortNumbers = numbers.sort(); // apply for string data
console.log(sortNumbers);

let sortDescNumbers = numbers.sort((a, b) => {
    return b - a;
});

console.log(sortDescNumbers);

students.push({
    firstName: "tran Thi",
    lastName: "D",
    mark: 5
});

console.log('push obj' ,students);

let sortMarkStudents = students.sort((student1, student2) => {
    // if (student1.mark > student2.mark) {
    //     return 1;
    // } else if (student2.mark > student1.mark) {
    //     return -1;
    // } else {
    //     return 0;
    // }

    return student1.mark - student2.mark;
});

console.log('sort mark', sortMarkStudents);

let sortFirstNameStudents = students.sort((student1, student2) => {
    // let x = student1.firstName;
    // let y = student2.firstName;
    //
    // if (x > y) {
    //     return 1;
    // } else if (x < y) {
    //     return -1;
    // } else {
    //     return 0;
    // }

    return student1.firstName.localeCompare(student2.firstName);
})

console.log('sort first name', sortFirstNameStudents);

let sortFirstNameLengthStudents = students.sort((student1, student2) => {
    return student1.firstName.length - student2.firstName.length;
});

console.log('sort first name length', sortFirstNameLengthStudents);

// concat
console.log('numbers concat students', numbers.concat(students));