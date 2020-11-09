const { fstat } = require("fs");
const request = require("request");
const fs = require("fs");
const urlToUse = process.argv[2]
const pathToUse = process.argv[3]

request(urlToUse, (error, response, body) => {
  // docs request for format. 
  if (error || response.statusCode !== 200) {
    console.log(`${error}!`)
  } 
  
  if (!pathToUse) {
    console.log(`Path ${pathToUse} cannot be found`)
  } else {
    fs.writeFile(pathToUse, body, () => {
    console.log(` Dowloaded and saved ${urlToUse} (${body.length}bytes) to ${pathToUse}`)
    })
  }
})  

