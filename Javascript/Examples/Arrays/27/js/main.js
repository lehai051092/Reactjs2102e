let students = [
    {
        id: "T3HXX1",
        firstName: "NgAN",
        lastName: "Duong Thuy"
    },
    {
        id: "T3HXX2",
        firstName: "HanNn",
        lastName: "Do THi Thu"
    },
    {
        id: "T3HXX5",
        firstName: "Minh",
        lastName: "NguyEn Nhat"
    }
];

function getNormalizeName(username) {
    username = username.toLowerCase();

    for (let i = 0; i < username.length; i++) {
        if (i === 0 || username.charAt(i - 1) === " ") {
            username = username.slice(0, i) + username.charAt(i).toUpperCase() + username.slice(i + 1);
        }
    }

    return username;
}

function showStudents(students) {
    for (let i = 0; i < students.length; i++) {
        let firstName = students[i].firstName;
        let lastName = students[i].lastName;
        let normalizeFirstName = getNormalizeName(firstName);
        let normalizeLastName = getNormalizeName(lastName);

        students[i].firstName = normalizeFirstName;
        students[i].lastName = normalizeLastName;

        if (firstName.length >= 3 && firstName.indexOf('a') > 0 || firstName.indexOf('A') > 0) {
            console.log(students[i]);
        }
    }
}

showStudents(students);