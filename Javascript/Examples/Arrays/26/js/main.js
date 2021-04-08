let a = [1, 2, 3, 4, 6, 7];
let k = 5;
let b = [];

function sortElement(a, k, b) {
    for (let i = 0; i < a.length; i++) {
        let result = Math.abs(k - a[i]);
        b.push(result);
        b.sort();
    }
}

function getElementNearestK(a, k, b) {
    sortElement(a, k, b);

    for (let i = 0; i < a.length; i++) {
        let result = Math.abs(k - a[i])
        if (result === b[0]) {
            console.log(a[i])
        }
    }
}


getElementNearestK(a, k, b);


