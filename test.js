let fs = require("fs")


fs.writeFile(`${__dirname}/index.html`, `<h1>HTML is cool</h1>`, (error) => {
    error ? console.log(error) : console.log("yey! congrats")
} )