let arr = [9, 8, 7, 6, 4, 5, 3, 2, 1, 10];

function sortArr(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        let swap = true;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swap = false;
            }
        }

        if (swap === true) {
            break;
        }
    }

    return arr;
}


console.log(sortArr(arr));