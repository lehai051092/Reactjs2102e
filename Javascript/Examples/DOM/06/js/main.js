function changeColor(value) {
    let container = document.getElementById('container');

    if (value === "green") {
        container.style.backgroundColor = "green";
    } else if (value === "red") {
        container.style.backgroundColor = "red";
    } else {
        container.style.backgroundColor = "#cccccc";
    }
}