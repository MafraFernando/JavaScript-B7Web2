class Person {
    _age = 20;
    steps = 0;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    takeAStep() {
        this.steps++;
    }

    get age() {
        return this._age;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    set age(x) {
       if (typeof x == 'number') {
         this._age = x;
       } 
    }
}

let p1 = new Person('João', 'Silva');
let p2 = new Person('Maria', 'Souza');
let p3 = new Person('Pedro', 'Lara');

p1.age = 50;
console.log(`${p1.fullName} tem ${p1.age} anos.`);
