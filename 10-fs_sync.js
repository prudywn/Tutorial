const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/written.txt', `Here is the file written by node: \n ${first} \n ${second}`)

//flag: 'a' --append instead of overwrite