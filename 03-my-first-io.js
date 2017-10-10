let filesystem = require('fs');

// let buffer = filesystem.readFileSync(process.argv[2]);
let buffer = filesystem.readFileSync(process.argv[2], 'utf-8');

// let splitedBuffer = buffer.toString().split('\n');
let splitedBuffer = buffer.split('\n');


console.log(splitedBuffer.length - 1)