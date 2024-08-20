class Person {
    age = 0;
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`${this.name} diz OI!`);
    }
}

class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
}

let p1 = new Student('Fernando', 145);
p1.age = 33;

p1.sayHi();
console.log(`${p1.name} tem ${p1.age} anos e matrícula: ${p1.id}`);