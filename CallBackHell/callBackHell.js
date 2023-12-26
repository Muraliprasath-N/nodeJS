const fs = require('fs');

fs.readFile('file1.txt', 'utf8', function (err, data1) {
    if (err)
        console.log(err);
    else {
        fs.readFile('file2.txt', 'utf8', function (err, data2) {
            if (err)
                console.log(err);
            else {
                fs.readFile('file3.txt', 'utf8', function (err, data3) {
                    if (err)
                        console.log(err);
                    else {
                        console.log("Data1: ", data1);
                        console.log("Data2: ", data2);
                        console.log("Data3: ", data3);
                    }
                });
            }
        });
    }
});