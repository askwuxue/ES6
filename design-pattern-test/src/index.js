class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat () {
        alert(`${this.name} eating....`);
    }
}

class Student extends Person {
    constructor(name, age, studyNumber) {
        super(name, age);
        this.studyNumber = studyNumber;
    }

    getNumber () {
        return this.studyNumber;
    }
}

let p = new Person('askwuxue', 22);
p.eat();

let s = new Student('ningning', 18, 2015010101);
s.eat();
alert(s.getNumber());