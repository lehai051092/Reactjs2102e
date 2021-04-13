function changeBackgroundColor(pickColor) {
    let background = document.getElementById('container');

    switch (pickColor) {
        case "red":
            background.style.backgroundColor = "#ff0000";
            break;
        case "blue":
            background.style.backgroundColor = "#0000ff";
            break;
        case "brown":
            background.style.backgroundColor = "#a52a2a";
            break;
        case "lavender":
            background.style.backgroundColor = "#e6e6fa";
            break;
    }
}
