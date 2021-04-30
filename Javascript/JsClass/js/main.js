class Student {
    constructor(name, group, mark) {
        this.name = name;
        this.group = group;
        this.mark = mark;
    };

    exam = () => {
        console.log(this.name + " mark is " + this.mark);
        this.study();
        call(this.study);
    };

    study = () => {
        console.log(this.name + " is studying");
    }

}

let student1 = new Student("Bi", "Reactjs", 5);
let student2 = new Student("Hai", "Reactjs", 0);
student1.exam();
student2.exam();
student1.study();
student2.study();


function call(cb) {
    cb();
}

call(student1.exam);

class Person {
    constructor(name) {
        this.name = name;
    }

    go() {
        console.log(this.name + " is going.");
    }
}

class Doctor extends Person {
    constructor(subject) {
        super();
        this.subject = subject;
    }

    go() {
        console.log(this.name + " is " + this.subject + " on going.");
    }
}

class Teacher extends Person {
    constructor(className) {
        super();
        this.className = className;
    }
}


let drBi = new Doctor();
drBi.name = "Le Bi";
drBi.subject = "Nurse";
drBi.go();
console.log(drBi);











