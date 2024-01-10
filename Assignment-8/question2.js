// // 2. Show examples of use of splice method to add and remove elements from array.

// const arr = [1, 2, 3, 4, 5];
// const deleted = arr.splice(2, 3);
// console.log(arr);
// console.log(deleted);

// const arr1 = [1, 2, 3, 4, 5];
// const deleted1 = arr1.splice(arr1.length, 0, 6, 7, 8);

// console.log(arr1);
// console.log(deleted1);


// class Person {
//   constructor() {
//     this.name = 'murali';
//     // this.displayName = () => {
//     //   console.log(this.name);
//     // }
//   }
// }

// Person.prototype.displayName = () => {
//   console.log(this.name);
// }

// const person = new Person();
// const func = person.displayName.bind(person);
// console.log(func);
// // console.log(Person.prototype);

class Person {
  constructor(name) {
    this.name = name;
  }
}

function boundDisplayName() {
  Person.prototype.displayName = () => {
    console.log(this.name);
  };
  this.displayName();
}

const person = new Person("murali");
// const func = boundDisplayName.bind(person);

// func();
boundDisplayName();