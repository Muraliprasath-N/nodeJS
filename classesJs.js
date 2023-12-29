class Person {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }

    set name(_name) {
        this._name = _name;
    }

    get name() {
        return this._name
    }

    set age(_age) {
        this._age = _age;
    }

    get age() {
        return this._age
    }

    greet() {
        console.log(`Hi, My _name is  ${this._name} and my _age is ${this._age}`);
    }

    className() {
        return 'Person';
    }

    static describe() {
        console.log('Myself Person');
    }
}

const person1 = new Person('Murali', 21);
person1.greet();
console.log(person1.name);
console.log(person1.className());
Person.describe();