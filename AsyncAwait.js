const promise = new Promise((resolve) => {
        const url = "https://www.google.com/";
    fetch(url).then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then((data) => {
        resolve(data);
    })
    .catch((error) => {
        reject(error);
    });;
});

async function displayInConsole() {
    const data = await promise;
    console.log(data);
}

displayInConsole();