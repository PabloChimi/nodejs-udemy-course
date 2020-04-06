const fs = require('fs')

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan holiday'
// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJson = dataBuffer.toString()
// const data = JSON.parse(dataJson)

// console.log(data.author)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString()
var data = JSON.parse(dataJson)

data.name = "pablo"
data.planet = "Dacota"
data.age = "25"

const JSONdata = JSON.stringify(data)
fs.writeFileSync('1-json.json', JSONdata)