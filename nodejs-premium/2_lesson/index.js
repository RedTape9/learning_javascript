const fs = require('fs');

const data = 
`Hallo from NodeJS
I am random text!`

fs.writeFileSync('nodejs.txt', data)
const result = fs.readFileSync('nodejs.txt', {encoding: 'utf8'})
console.log(result)

console.log(__dirname)
console.log(__filename)