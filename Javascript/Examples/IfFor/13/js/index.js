let string = "This is a beautiful day";

function reverseString(string) {
    let newString = '';

    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }

    return newString;
}

function reverseStringRecursive(string) {
    if (string === '') {
        return '';
    }

    return reverseStringRecursive(string.substr(1)) + string.charAt(0);
}

console.log('Nomal', reverseString(string));
console.log('Recursive', reverseStringRecursive(string));