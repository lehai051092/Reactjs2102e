let number = 10;

// Use recursive, show 1-n
function show(number) {
    if (number === 0) {
        return;
    }

    show(number - 1);
    console.log(number);
}

show(number);

// Use recursive, calculate total 1-n

function total(number) {
    if (number === 0) {
        return 0;
    }

    return number + total(number - 1);
}

console.log(total(number));

// 2 ways to declare a function
// function expression

let hello = function () {
    console.log('Hello Function Expression');
}

hello();

// arrow function - (fat arrow)
let checkNumber = (number) => (number % 2 === 1 ? "ODD" : "EVEN");

console.log(checkNumber(number));

// number handler
let index = 0;
let result = index + ++index + index++ + index + --index + index--;
console.log(result);

function getInputNumber() {
    let number = 0;
    do {
        let numberStr = prompt("Enter a number: ", 0);
        number = parseInt(numberStr);
    } while (Number.isNaN(number));

    return number;
}

console.log(getInputNumber());

// Math
console.log("floor", Math.floor(1.5));
console.log("ceil", Math.ceil(1.5));
console.log("round", Math.round(1.5));
console.log("random", Math.random());

// 0 <= Math.random() < 1
function rollDice() {
    return Math.ceil(Math.random() * 6);
}

console.log(rollDice());

// random 10 > 15;
function randomFromTo(from, to) {
    let temp = to - from + 1;
    return Math.floor(Math.random() * temp) + from;
}

console.log("random(10, 15)", randomFromTo(10, 15));

// String handler
let studentName = "Dinh Dai";
studentName = "Vo " + studentName;
console.log(studentName);
studentName = "Vo Dinh Dai";

console.log('Student name length', studentName.length);
console.log('Student name subString', studentName.substring(3));
console.log('Student name subString', studentName.substring(3, 7));
console.log('Student name uppercase', studentName.toUpperCase());
console.log('Student name lowercase', studentName.toLowerCase());
console.log('Student name charAt', studentName.charAt(3));
// Index of null return -1
console.log('studentName.indexOf', studentName.indexOf("Dai"));
console.log('studentName.lastIndexOf', studentName.lastIndexOf("i"));
console.log('studentName.slice', studentName.slice(3, 6));
console.log('studentName .substr', studentName.substr(3));
console.log('studentName .substr', studentName.substr(3, 6));
console.log('studentName .replace', studentName.replace("Vo", "Vu"));

// Example
let userName = "tran tuAn anH";

// normalize username to people name => Tran Quan Anh
function normalizeName(username) {
    username = username.toLowerCase();

    for (let i = 0; i < username.length; i++) {
        if (i === 0 || username.charAt(i - 1) === " ") {
            username = username.slice(0, i) + username.charAt(i).toUpperCase() + username.slice(i + 1);
        }
    }

    return username;
}

console.log(normalizeName(userName));
userName = normalizeName(userName);

function replaceName(userName) {
    userName = userName.replace("Tuan", "Vu");
    return userName;
}

console.log(replaceName(userName));








