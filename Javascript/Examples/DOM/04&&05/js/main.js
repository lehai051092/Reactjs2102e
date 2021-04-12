function calculatorAgeByYearOfBirth() {
    let date = new Date();
    let currentYear = date.getFullYear();
    let inputYear = +document.getElementById('input-year-of-birth').value;
    let showAge = currentYear - inputYear;

    if (inputYear >= 1900 && inputYear < currentYear) {
        document.getElementById('show-age').innerHTML = "Tuổi của bạn là " + showAge;
    } else {
        document.getElementById('show-age').innerHTML = "Nhập lại số năm lớn hơn 1900";
    }
}

function validate(element) {
    if (element.value.length >= 4) {
        element.value = "";
    }
}