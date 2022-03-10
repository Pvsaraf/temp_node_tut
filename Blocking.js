var fs = require('fs');

var data = fs.readFileSync('test.txt');

console.log(typeof(data));
console.log(data.toString());
console.log('End here');