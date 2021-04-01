let string = "Hello   World";

function countSpace(string) {
    let count = 0;

    for (let i = 0;i < string.length; i++) {

        if (string.charAt(i) === ' ') {
            count++;
        }
    }

    return count;
}

console.log(countSpace(string));
