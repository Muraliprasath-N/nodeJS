const fs = require("fs");

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

async function executeSequentially() {
    data1 = await fileRead('file1.txt');
    data2 = await fileRead('file2.txt');
    data3 = await fileRead('file3.txt');

    console.log("Data1: ", data1);
    console.log("Data2: ", data2);
    console.log("Data3: ", data3);
}

executeSequentially();