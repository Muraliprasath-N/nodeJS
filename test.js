// class Person {}

// function forLoop(...args) {
//   console.log(args);
//   console.log(this);
//   console.log("-----------------------");
// }

// const func = forLoop.bind(new Person(), "a", "a");
// forLoop('function');

// var aaaaaa = 1;
// let aaaaab = 1;
// console.log('asda');

// const display = () => {
//     var aaaaaa = 10;
//     console.log(aaaaaa);
// };
// display();
// console.log(aaaaaa);


for (let i = 1; i < 5; i++){
    let index = i;
    setTimeout(() => {
        console.log(index);
    }, i * 1000);
}