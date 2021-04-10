let arr = [1, 2, 3, 2, 3, 4, 6, 7];

function checkPrime(n) {
    let isPrime = true;

    if (n < 2) {
        isPrime = false;
    } else if (n === 2) {
        isPrime = true;
    } else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                isPrime = false;
            }
        }
    }

    return isPrime;
}

function checkArray(arr) {
    let arrPrime = [];
    for (let i = 0; i < arr.length; i++) {
        if (checkPrime(arr[i])) {
            arrPrime.push(arr[i]);
        }
    }

    console.log(arrPrime);
}

checkArray(arr);