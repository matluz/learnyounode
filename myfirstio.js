var fs = require('fs');

buffer = fs.readFileSync(process.argv[2]);
bufferString = buffer.toString();

arraySplit = bufferString.split("\n")

console.log(arraySplit.length - 1);