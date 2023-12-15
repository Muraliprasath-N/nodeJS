function sum(a, b) {
    return new Promise(resolve => resolve(a + b))
}

sum(1, 2).then(sum => console.log(sum));