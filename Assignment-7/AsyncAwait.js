function fetchData() {
    return new Promise((resolve, reject) => {
        const url = "https://www.google.com/";
        fetch(url)
            .then((response) => {
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
            });
    });
}

async function displayInConsole() {
    try {
        const data = await fetchData();
        console.log(data);
        return data; 
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    fetchData,
    displayInConsole,
};
