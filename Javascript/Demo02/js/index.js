// object - property, methods (OOP)
let car = {
    name: "Honda",
    color: "White",
    weight: 850,
    start: function () {
        console.log(car.name + ' starting...');
        console.log(this.name + ' starting...');
    }
};

console.log('car.name', car.name);
console.log('car[name]', car["name"]);

function getValueByProperty(prop) {
    return car[prop];
}

console.log(getValueByProperty("name"));
console.log(getValueByProperty("color"));

car.model = "2021";

console.log('car', car);

this.name = "Test";
let start = car.start.bind(car);

car.start();

start();

