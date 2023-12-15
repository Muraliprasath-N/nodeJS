const { promisify } = require('util');

function add(a, b, callback) {
    callback(null, a + b);
}

function multiply(a, b, callback) {
    callback(null, a * b);
}

const addPromise = promisify(add);
const multiplyPromise = promisify(multiply);

addPromise(2, 3)
    .then((sum) => multiplyPromise(sum, 10))
    .then((product) => {
        console.log('Promisify Result:', product);
    });
