const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map((line)=>line.split(' ')).flat().map(Number);
const max = Math.max(...input);
const idx = input.indexOf(max);
console.log(max);
console.log(Math.floor(idx / 9) + 1, (idx % 9) + 1);