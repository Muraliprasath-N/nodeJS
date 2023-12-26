// callback
function first(cb) {
    setTimeout(() => {
        console.log('callback 1');
    }, 1000);
    cb();
}

function second() {
    setTimeout(() => {
        console.log('callback 2');
    }, 2000);
    third();
}

function third() {
    setTimeout(() => {
        console.log('callback 3');
    }, 3000);
}

first(second);
let i = 0;


// Promise
const promise1 = new Promise(resolve => {
    setTimeout(() => console.log('promise 1'), 1000);
    resolve();
});
const promise2 = new Promise(resolve => {
    setTimeout(() => console.log('promise 2'), 2000);
    resolve();
});
const promise3 = new Promise(resolve => {
    setTimeout(() => console.log('promise 3'), 3000);
    resolve();
});

promise1
    .then(() => promise2)
    .then(() => promise3);

// async and await
async function timeout1(cb) {
    await setTimeout(() => {
        console.log('async 1');
    }, 1000);
    cb();
}

async function timeout2() {
    await setTimeout(() => {
        console.log('async 2');
    }, 2000);
    timeout3();
}

async function timeout3() {
    await setTimeout(() => {
        console.log('async 3');
    }, 3000);
}

timeout1(timeout2);