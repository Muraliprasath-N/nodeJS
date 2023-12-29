// // callback
// function first(cb) {
//     setTimeout(() => {
//         console.log('callback 1');
//     }, 1000);
//     cb();
// }

// function second() {
//     setTimeout(() => {
//         console.log('callback 2');
//     }, 1000);
//     third();
// }

// function third() {
//     setTimeout(() => {
//         console.log('callback 3');
//     }, 1000);
// }

// // first(second);
// // let i = 0;


// // // Promise
// // const promise1 = new Promise(resolve => {
// //     setTimeout(() => console.log('promise 1'), 1000);
// //     resolve();
// // });
// // const promise2 = new Promise(resolve => {
// //     setTimeout(() => console.log('promise 2'), 1000);
// //     resolve();
// // });
// // const promise3 = new Promise(resolve => {
// //     setTimeout(() => console.log('promise 3'), 1000);
// //     resolve();
// // });

// // promise1
// //     .then(() => promise2)
// //     .then(() => promise3);

// // async and await
// async function timeout1(cb) {
//     await setTimeout(() => {
//         console.log('async 1');
//     }, 1000);
//     cb();
// }

// async function timeout2() {
//     await setTimeout(() => {
//         console.log('async 2');
//     }, 1000);
//     timeout3();
// }

// async function timeout3() {
//     await setTimeout(() => {
//         console.log('async 3');
//     }, 1000);
// }

// timeout1(timeout2);


// callback
function timer(ms, callback) {
    setTimeout(callback, ms);
}

function first(fn) {
    timer(1000, () => {
        console.log('Waited for 1 second');
        fn(third);
    });
}

function second(fn) {
    timer(2000, () => {
        console.log('Waited for 2 seconds');
        fn();
    });
}

function third() {
    timer(3000, () => {
        console.log('Waited for 3 seconds');
    });
}

first(second);


