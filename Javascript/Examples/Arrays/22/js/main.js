let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function checkArray(arr) {
    let max = 0;
    let min = 0;
    let average = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else {
            min = arr[i];
        }

        average = (max + min) / 2;
    }

    console.log(max);
    console.log(min);
    console.log(average);
}

checkArray(arr);