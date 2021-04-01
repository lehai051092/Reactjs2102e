let name = "NguyeN THI tho tHu hA";

function normalizeName(name) {
    name = name.toLowerCase();
    for (let i = 0; i < name.length; i++) {
        if (i === 0 || name.charAt(i - 1) === ' ') {
            name = name.slice(0 , i) + name.charAt(i).toUpperCase() + name.slice(i +  1);
        }
    }

    return name;
}

console.log(normalizeName(name));