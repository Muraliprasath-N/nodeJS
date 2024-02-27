const os = require("os");
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
const percentage = ((totalMemory - freeMemory) / totalMemory) * 100;
console.log(totalMemory, freeMemory);

console.log(`${percentage}%`);

// v3 - 3.1.2.25
