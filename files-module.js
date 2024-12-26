const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second);//Hello this is first text file Hello this is second text file

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second} `)//creates a file with the provided text
writeFileSync('./content/result-sync.txt', `appended text `, {flag: 'a'})//append the provided text to the file