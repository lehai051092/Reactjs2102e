let students = [
    {
        id: "T3HXX1",
        firstName: "Ngan",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "Ha",
        lastName: "Do Thi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "Nguyen Nhat"
    }
];

function getStudentsSort(students) {
    let byFirstName = students.slice(0);

    byFirstName.sort(function (a, b) {
        let x = a.firstName.toLowerCase();
        let y = b.firstName.toLowerCase();

        return x < y ? -1 : x > y ? 1 : 0;
    })

    console.log(byFirstName);
}

getStudentsSort(students);