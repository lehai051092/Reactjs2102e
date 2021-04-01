let s1 = "hi hi hi hi hi";
let s2 = "hi";

function findPosition(s2, s1) {
    let result;
    let lastPosition = s1.lastIndexOf(s2);
    let s1SubString = s1.substring(0, lastPosition);
    result = s1SubString.lastIndexOf(s2);

    return result;
}

console.log(findPosition(s2, s1));