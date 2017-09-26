let filesystem = require('fs');

let buffer = filesystem.readFileSync(process.argv[2]);

let splitedBuffer = buffer.toString().split('\n');

console.log(splitedBuffer.length - 1)