function sum(a, b, callback) {
    callback(a + b);
}

function multiply(a, b, callback) {
    return new Promise(resolve => resolve(callback(a * b)));
}

function myPromisify(fn) {
    return (...args) => {
        return new Promise((resolve, reject) => {
            fn(...args, result => {
                if (result instanceof Error)
                    reject(result);
                else if (result instanceof Promise)
                    result.then(resolve).catch(reject);
                else
                    resolve(result);
            });
        });
    }
}

const promiseSum = myPromisify(sum);
const promiseMultiply = myPromisify(multiply)

promiseSum(1, 2)
    .then(result => console.log(result));
promiseMultiply(1, 2)
    .then(result => console.log(result));