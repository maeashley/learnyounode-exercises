/*Write a program that uses a single syncrhonous filesystem operation to read a file and print the number of new line(\n) it contains to the console.

The full path to the file to read will be provided as the first command-line arg.(i.e. process.argv[2]) You do not need to make your own test file.*/

var fs = require('fs')
//to read a file, convert it to a string and split it to count the number of \n characters.
var k = fs.readFileSync(process.argv[2]).toString().split('\n').length;

console.log(--k);
