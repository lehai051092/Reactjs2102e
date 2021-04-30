// callback
function hello() {
    console.log('Hello World');
}

hello();

function say(cb) {
    cb();
}

say(hello);

// synchronous - asynchronous (dong bo va bat dong bo)
function dinner() {
    setTimeout(() => {
        console.log('dinner done');
        readBook();
    }, 3000);
}

function readBook() {
    setTimeout(() => {
        console.log('read book done');
    }, 2000);
}

dinner();
console.log("Main Thread");

// promise
let accept = true;
let found = true;

function buyCar() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            (accept) ? resolve({type: "father promise", status: true}) : reject({
                type: "father promise",
                status: false
            });
        }, 3000);
    });
}

function findLover() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            (found) ? resolve({type: "find lover", status: true}) : reject({type: "find lover", status: false});
        }, 2000);
    });
}

buyCar()
    .then((data) => {
        console.log(data.type, data.status);
        return findLover();
    })

    .then((data) => {
        console.log(data.type, data.status);
    })

    .catch((err) => {
        console.log(err.type, err.status);
    })





