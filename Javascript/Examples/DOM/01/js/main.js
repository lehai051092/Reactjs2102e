function showInformation() {
    let inputName = prompt('Input Name:');
    let inputAge = prompt('Input Age:');

    document.write(
        "Chào bạn: " + "<b>" + inputName + "</b>" + "<br/>"
        + "Tuổi của bạn là: " + "<u>" + inputAge + "</u>"
    );
}

showInformation();