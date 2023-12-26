const util = require("util");
const fs = require('fs');

const promise = util.promisify(fs.read);

promise('file1.txt', 'utf8')
    .then(data1 => promise('file2.txt', 'utf8'))
    .then(data2 => promise('file3.txt', 'utf8', () => {
        console.log("Data1: ", data1);
        console.log("Data2: ", data2);
        console.log("Data3: ", data3);
    }));