let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];


function checkOccurrences(arr) {
    let count = 1;
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            count++;
            if (count > max) {
                max = count;
            }
        }
    }

    console.log(max);
}

checkOccurrences(arr);