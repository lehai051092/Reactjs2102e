let s1 = 'This is a beautiful day';
let s2 = 'is';

function findS2InS1(s1, s2) {
    return s1.match(s2);
}

console.log(findS2InS1(s1, s2));
console.log(findS2InS1Index(s1, s2));