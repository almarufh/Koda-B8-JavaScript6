const url = "https://jsonplaceholder.typicode.com/users";

fetch (url)
.then((res) => {
    res.text().then(response => {
        let data = JSON.parse(response);
        let resd = [];
        for (let i = 0; i < data.length; i++) {
            resd.push(data[i].email.toLowerCase());
        }
        console.log("Methode Chaining Then-Catch\n", resd)
    })
})

let resd = [];
async function getEmail () {
    try {
        const response = await fetch(url);
        const data = await response.json();
        for (let i = 0; i < data.length; i++) {
            resd.push(data[i].email.toLowerCase());
        }
        console.log("\nMethode Async-Await\n", resd)
    } catch (error) {
        console.log(error)
    }
}

getEmail()
