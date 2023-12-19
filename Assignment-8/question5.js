// 5. Write a function that takes object as input and prints all keys and values in a valid JSON format
const obj = {
    name: 'murali',
    age: '21',
    occupation: 'developer'
}

function displayObjAsJSON(obj) {
    console.log(JSON.stringify(obj));
}

displayObjAsJSON(obj);