const fs = require("fs");

let data1, data2;

const fileRead = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err)
                reject(err);
            else
                resolve(data);
        });
    });
}

fileRead('file1.txt')
    .then(data => {
        data1 = data;
        return fileRead('file2.txt');
    })
    .then(data => {
        data2 = data;
        return fileRead('file3.txt');
    })
    .then(data => {
        console.log("Data1: ", data1);
        console.log("Data2: ", data2);
        console.log("Data3: ", data);
    });

    let d = new Date()