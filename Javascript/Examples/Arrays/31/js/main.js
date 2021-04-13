let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let k = 26;
// let k = 30;


function findPair(arr, k) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] + arr[i] + arr[i + 1] === k) {
            return 'Yes';
        }
    }

    return 'No';
}

console.log(findPair(arr, k));