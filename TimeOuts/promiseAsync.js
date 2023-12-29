// promise, async and await

function timer(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function first(fn) {
    await timer(1000); // Wait for 1 second
    console.log('Waited for 1 second');
    fn(third);
}

async function second(fn) {
    await timer(2000); // Wait for 2 seconds
    console.log('Waited for 2 seconds');
    fn();
}

async function third() {
    await timer(3000); // Wait for 3 seconds
    console.log('Waited for 3 seconds');
}

first(second);