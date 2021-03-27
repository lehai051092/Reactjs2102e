let n = prompt("Input: ");
let total = 0;

for (let i = 0; i <= n; i++) {
    if (i % 2 !==0) {
        total += i;
    }
}

console.log(total);