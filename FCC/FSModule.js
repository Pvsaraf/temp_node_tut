const {readFileSync, writeFileSync} = require('fs')

console.log('start');

const first = readFileSync('./FCC/Content/Subfolder/First.txt', 'utf8')
const second = readFileSync('./FCC/Content/Subfolder/Second.txt', 'utf8')


// console.log(first, second)

writeFileSync('./FCC/Content/Subfolder/Result.txt', 
`Here is the result : ${first}, ${second}`,
{ flag: 'a'}
)

console.log('done with this task');
console.log('Starting the next one');
