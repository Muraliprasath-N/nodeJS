// 2. Show examples of use of splice method to add and remove elements from array.

const arr = [1, 2, 3, 4, 5];
const deleted = arr.splice(2, 3);
console.log(arr);
console.log(deleted);

const arr1 = [1, 2, 3, 4, 5];
const deleted1 = arr.splice(arr1.length - 1, 1, 6, 7, 8);

console.log(arr1);
console.log(deleted1);