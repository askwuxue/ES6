// let Person = class {}
// 推荐类名大写

class Person {
    // 创建对象的时候调用构造函数
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    showName () {
        return this.name;
    }
    showAge () {
        return this.age;
    }
}

let p1 = new Person('askwuxue', 20);
console.log(p1.showName(), p1.showAge());