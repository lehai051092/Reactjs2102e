let n = prompt("Input a Number: ");
n = parseInt(n);
let isPrime = true;

if (n < 2) {
    isPrime = false;
} else if (n === 2) {
    isPrime = true;
} else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(n + ' is Prime');
} else {
    console.log(n + ' is not Prime');
}

