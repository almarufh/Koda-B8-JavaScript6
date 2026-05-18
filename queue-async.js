function response (input, output) {
    function name(resolve, reject) {
        if (typeof input !== "number") {
            switch (input) {
                case "undifined": {
                    reject("Parameter input tidak diisi");
                    break;
                }
                case "string": {
                    reject("Parameter string ditolak");
                    break;
                }
                default: {
                    reject("Parameter harus berisikan type data number")
                }
            }
            return
        }
        setTimeout((input) => {
           resolve(output)
        }, input)
    }
    return new Promise (name)
}

async function testing(a,b,c) {
    try {
        console.log(await response(1500, a));
        console.log(await response(2000, b));
        console.log(await response("500", c))
    } catch (error) {
        console.log("Pesan Eror : ", error)
    }
}


testing("jhon", "Ed", "Jane")