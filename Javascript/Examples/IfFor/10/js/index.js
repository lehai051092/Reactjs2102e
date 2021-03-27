function getMultiplicationTable() {
    let table = "<table border='1' width='100%'>";

    for (let i = 1; i <= 9; i++) {
        table += "<tr>";
        for (let j = 1; j <= 9; j++) {
            table += "<td>" + j + "x" + i + "=" + (j * i) + "</td>";
        }

        table += "</tr>";
    }

    table += "</table>";

    document.write(table);
}

getMultiplicationTable();