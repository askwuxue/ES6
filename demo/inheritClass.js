class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    };
    showName () {
        return `我是父类的showName: my name is ${this.name}`;
    }
}

class Student extends Person {
    constructor (name, age, skill) {
        super(name, age);
        this.skill = skill;
    }
    showName () {
        super.showName();
        return `我是子类的showName  my name is ${this.name}`;
    }
    showSkill () {
        return `my skill is   ${this.skill}`;
    }
}

let s1 = new Student('askwuxue', 20, 'study');
console.log(s1.showName());
console.log(s1.showSkill());