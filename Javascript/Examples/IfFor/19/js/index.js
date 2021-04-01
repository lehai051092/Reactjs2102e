let n = 10;

function getTotal(n) {
    if (n === 0) {
        return 0;
    }

    return n + getTotal(n - 1);
}

console.log(getTotal(n));