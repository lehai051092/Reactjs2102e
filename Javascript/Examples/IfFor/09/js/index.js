function isSymmetricalNumber() {
    let num = prompt('Input number: ');
    num = parseInt(num);
    let sum = 0;
    let temp = num;

    while (num > 0) {
        sum = sum * 10 + num % 10;
        num = Math.floor(num / 10);
    }

    if (sum === temp) {
        alert(sum + ' is a Symmetrical Number');
    } else {
        alert(sum + ' is not a Symmetrical Number');
    }
}

isSymmetricalNumber();
