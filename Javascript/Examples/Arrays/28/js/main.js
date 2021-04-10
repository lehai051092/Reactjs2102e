let students = [
    {
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX2",
        firstName: "Anh",
        lastName: "Do Thi Van"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }
];

function getIndividualStudents(students) {
    for (let i = 0; i < students.length; i++) {
        let lastName = students[i].lastName;

        for (let j = 0; j < lastName.length; j++) {
            if (lastName.slice(0, j) === "Do") {
                console.log(students[i]);
            }
        }
    }
}

getIndividualStudents(students);