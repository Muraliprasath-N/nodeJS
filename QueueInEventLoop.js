const fs = require('fs');

setTimeout((() => {
    cb('Timer queue - 2');
}), 1000);

setTimeout((() => {
    cb('set time out 2');
}), 100);

fs.readFile('./text.txt', 'utf8', (err, data) => {
    if (err) cb(err.message);
    else cb(data);
});

setImmediate((() => {
    cb('Check queue - 3');
}).bind(this));


const promise = new Promise((resolve) => {
    resolve('Microtask queue - 1');
});
promise.then(cb);

function cb(message) {
    console.log(message);
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