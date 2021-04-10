let arr = [3, 1, 6, 9, 11, 20];
let k = 13;

function sortArrayAfterAddK(arr, k) {
    arr.push(k);
    arr.sort(function (a, b) {
        return a - b;
    });
}

sortArrayAfterAddK(arr, k)

console.log(arr);