function checkInput() {
    let n;
    do {
        n = prompt("Input n > 0 : ");
        n = parseInt(n);
    } while (n < 0);

    let check = checkNumber(n);

    if (check) {
        alert(n + ' is ok');
    } else {
        alert('no');
    }
}

function checkNumber(n) {
    while (n > 0) {
        let t = n % 10;

        if (t % 2 === 0) {
            return false;
        }
        n /= 10;
    }

    return true;
}

checkInput();


