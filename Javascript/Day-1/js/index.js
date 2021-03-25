let studentName = 'Hai';
let studentAge = 13;
let className = 'Reactjs';

let intro = "Name:" + studentName + "; Age:" + studentAge;
let teamIntro = `Name: ${studentName}; Age: ${studentAge}; Class: ${className}`;

console.log(intro, teamIntro);


// Object
let student = {
    name: 'Hai',
    age: 20,
    className: "Reactjs"
}

console.log(student);

// Array
let ages = [20, 10, 30];
console.log(ages);

// Boolean
let isBoy = true; //false
console.log(isBoy);


// Instruments
// If - else
let today = 4;

if (today === 3) {
    console.log("Yes yes yes...");
} else {
    console.log("No no no...")
}

// Switch case
let month = 5;

if (month === 1) {
    console.log('Jan')
} else if (month === 2) {
    console.log('February')
} else if (month === 3) {
    console.log('March')
}

switch (month) {
    case 1:
        console.log('Jan');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    default:
        console.log('Hello');
        break;
}

// Loop: For - While - Do While
let begin = 1;
let end = 16;

for (let i = begin; i <= end; i++) {
    for (let j = 0; j < end; j++) {
        document.write('-');
        if (j / i === 0) {
            document.write('-' + '<br/>');
        }
    }
}

// let value = window.prompt("Enter a number", 0);
// if (value % 2 === 0) {
//     console.log('so chan', value, typeof value);
// } else {
//     console.log('so le', value, typeof value);
// }


// Check prime numbers
let inputNumber = prompt("Input a Number");
let number = parseInt(inputNumber);

function checkPrimeNumbers(number) {
    let isPrimeNumber = true;

    if (inputNumber < 2) {
        isPrimeNumber = false;
    } else if (number === 2) {
        isPrimeNumber = true;
    } else if (number % 2 === 0) {
        isPrimeNumber = false;
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrimeNumber = false;
                break;
            }
        }
    }

    if (isPrimeNumber) {
        console.log('YES');
    } else {
        console.log('NO');
    }
}

checkPrimeNumbers(number);

// Output 1 -> 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Output odd
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Output even
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


