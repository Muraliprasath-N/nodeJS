// // 2. Show examples of use of splice method to add and remove elements from array.

// const arr = [1, 2, 3, 4, 5];
// const deleted = arr.splice(2, 3);
// console.log(arr);
// console.log(deleted);

// const arr1 = [1, 2, 3, 4, 5];
// const deleted1 = arr1.splice(arr1.length, 0, 6, 7, 8);

// console.log(arr1);
// console.log(deleted1);


class Person {
  constructor() {
    this.name = 'murali';
    this.displayName = () => {
      console.log(this.name);
    }
  }
}

// Person.prototype.displayName = 

for (let i = 0; i < 5; i++){
  var index = i;
  setTimeout((index) => {
    console.log(index);
  }, index * 1000, index);
}

const person = new Person();
person.displayName();
// console.log(Person.prototype);



