function Person (name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.showName = function () {
    return `my name is: ${this.name}`;
};

Person.prototype.showAge = function () {
    return `my name is: ${this.age}`;
};

function Student (name, age, skill) {
    Person.call(this, name, age);
    this.skill = skill;
}

Student.prototype = new Person();


Student.prototype.showSkill = function () {
    return `my skill is ${this.skill}`
}

let s1 = new Student('askwuxue',20,'stuty');

console.log(s1);
console.log(s1.showName());
console.log(s1.showAge());
console.log(s1.showSkill());
