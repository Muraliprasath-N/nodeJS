// 6. Print all values of a nested obj

const nestedObj = {
    key1: 'value1',
    key2: 'value2',
    key3: {
        keyA: 'valueA',
        keyB: 'valueB',
        s: {
            "fsfasf": 'asdfa'
        }
    }
};

function dsf(obj) {
    const values = new Array;

    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            let arr = dsf(obj[key]);
            for (let i in arr) values.push(arr[i]);
        }else
            values.push(obj[key]);
    }
    return values
}

console.log(dsf(nestedObj));

const person = class {

}

class person {

}

