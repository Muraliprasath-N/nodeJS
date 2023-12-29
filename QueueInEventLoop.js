const fs = require('fs');

setTimeout((() => {
    cb('Timer queue - 2');
}), 2000);

// setTimeout((() => {
//     cb('set time out 2');
// }), 100);

// fs.readFile('./text.txt', 'utf8', (err, data) => {
//     if (err) cb(err.message);
//     else cb(data);
// });

// setImmediate((() => {
//     cb('Check queue - 3');
// }).bind(this));


const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve();
   }, 4000)
});
promise.then(cb);

function cb(message) {
    console.log(message || 'promise')
}

const time = +new Date() + 20000;

while (+new Date() < time) {
}

// for (let i = 0; i <= 1e10; i++){
//     if (i == 1e10)
//         console.log('---------------Main thread ended---------------');
// }

/* Output
---------------Main thread ended---------------
Microtask queue - 1
Timer queue - 2
Check queue - 3
IO queue - 4
*/