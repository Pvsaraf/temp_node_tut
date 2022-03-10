const p = require('path')

console.log(p.sep);

console.log(p.join())

const filePath = p.join('NODEJS','test.txt')
console.log(filePath);

const base = p.basename(filePath)
console.log(base)

const absolute = p.resolve(__dirname, 'NODEJS', 'test.txt')
console.log(absolute);