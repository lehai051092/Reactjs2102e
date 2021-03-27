let number = prompt("Input a Number: ")
number = parseInt(number);
let total = 0;

for (let i = 1; i <= number; i++) {
    total += i;
}

console.log(total);