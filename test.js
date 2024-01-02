function forLoop() {
    for (let i = 0; i <= 5; i++) {
        var index = i;
        setTimeout((index) => {
            console.log(index);
        }, index * 1000, index);
    }
}

forLoop();