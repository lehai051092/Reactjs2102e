let arr = [1, 2, 3, 2, 3, 4, 6, 7];


function getArraySquaredNumbers(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(Math.pow(arr[i], 2));
    }

    console.log(result);
}

getArraySquaredNumbers(arr);