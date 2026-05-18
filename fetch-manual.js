const url = "https://jsonplaceholder.typicode.com/users";

fetch (url)
.then((res) => {
    res.text().then(response => {
        let resd = [];
        let data = JSON.parse(response);
        const lowersCase = "abcdefghijklmnopqrstuvwxyz";
        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (let i = 0; i < data.length; i++) {
            let change = data[i].email;
            let newChange = "";

            for (let j = 0; j < change.length; j++) {
                let found = false;
                for (let x=0; x < upperCase.length; x++) {
                    if (change[j] === upperCase[x]) {
                        found = true;
                        change[j] = lowersCase[x];
                        newChange += lowersCase[x];
                        break;
                    }
                }
                if(!found) {
                    newChange += change[j]
                }
            }
            let temps =[newChange]
            resd = [
                ...resd,
                ...temps
            ]
        } 
        console.log("Methode Chaining Then-Catch\n", resd)
    })
})


let resd = [];
async function getEmail () {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const lowersCase = "abcdefghijklmnopqrstuvwxyz";
        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (let i = 0; i < data.length; i++) {
            let change = data[i].email;
            let newChange = "";

            for (let j = 0; j < change.length; j++) {
                let found = false;
                for (let x=0; x < upperCase.length; x++) {
                    if (change[j] === upperCase[x]) {
                        found = true;
                        change[j] = lowersCase[x];
                        newChange += lowersCase[x];
                        break;
                    }
                }
                if(!found) {
                    newChange += change[j]
                }
            }
            let temps =[newChange]
            resd = [
                ...resd,
                ...temps
            ]
        }
        console.log("\nMethode Async-Await\n", resd)
    } catch (error) {
        console.log(error)
    }
}

getEmail()