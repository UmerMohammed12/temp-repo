const {readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second);//Hello this is first text file Hello this is second text file

writeFileSync('./content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`, 
    {flag: 'a'})//creates a file with the provided text


console.log('done with this task');
console.log('start with the next one');
