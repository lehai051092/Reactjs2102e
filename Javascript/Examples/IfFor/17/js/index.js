function getMax(a, b, c) {
    let max = a;

    if (b > max) {
        max = b;
    } else if (c > max) {
        max = c;
    }

    return max;
}

function getMin(a, b, c) {
    let min = a;

    if (b < min) {
        min = b;
    } else if (c < min) {
        min = c;
    }

    return min;
}

console.log(getMax(3, 5, 2));
console.log(getMin(3, 5, 2));