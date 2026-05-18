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

response(1500, "John").then((output1) => {
    console.log(output1)
    response(2000, "Ed").then((output2) => {
        console.log(output2)
        response(500, "Jane").then((output3)=>{
            console.log(output3)
        }).catch((eror) => {
            console.log("Pesan Eror : ", eror)
        })
    }).catch((eror) => {
        console.log("Pesan Eror : ", eror)
    })
}).catch((eror) => {
    console.log("Pesan Eror : ", eror)
})