function displayMessage(cb) {
    setTimeout(() => {
        cb('callback triggered');
    }, 1000);
}

function displayWithDeplay(message) {
    console.log(message);
}

displayMessage(displayWithDeplay);

module.exports = displayMessage;