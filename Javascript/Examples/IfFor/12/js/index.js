let string = '  Hello   world ';

function deleteSpace(string) {
    return  string.replace(/\s+/g,'');
}

console.log(deleteSpace(string));
console.log(deleteSpace(string).length);