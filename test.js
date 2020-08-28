let fs = require("fs")
let https = require("https")


fs.writeFile(`${__dirname}/index.html`, `<h1>HTML is cool</h1>`, (error) => {
    error ? console.log(error) : console.log("yey! congrats")
} )


const milkyWayImage = `https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__340.jpg`

https.get(milkyWayImage, (res) => {
    res.pipe(fs.createWriteStream(`${__dirname}/milkway.jpg`))
})