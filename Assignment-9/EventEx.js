const readline = require('readline');

function printUserInput() {

    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);

    process.stdin.on('keypress', (key, data) => {
        
        if (data && data.ctrl && data.name === 'c')
            process.exit();
        else
            console.log(`Key pressed: ${key}`);
    });
}

printUserInput();

module.exports = printUserInput;