class Person {
    color = "branco"; // pré define uma característica
    age = 0;
    steps = 0;

    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    takeAStep() {
        this.steps++;
    }

    setAge(newAge) {
        if (typeof newAge == 'number') {
        this.age = newAge;
        } else {
            console.log('Idade não aceita. Somente números.');
        }
    }
}


let p1 = new Person('João', 'masculino');
let p2 = new Person('Maria', 'feminino');
let p3 = new Person('Fernando', 'masculino');

p2.color = "negra";
p1.setAge(20);
p2.setAge(28);
p3.setAge(33);

console.log(`O ${p1.name} do sexo ${p1.sex} e cor ${p1.color} tem ${p1.age} anos`);

console.log(`A ${p2.name} do sexo ${p2.sex} e cor ${p2.color} tem ${p2.age} anos`);

console.log(`O ${p3.name} do sexo ${p3.sex} e cor ${p3.color} tem ${p3.age} anos`);