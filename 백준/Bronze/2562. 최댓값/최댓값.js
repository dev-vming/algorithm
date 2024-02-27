const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const max = Math.max(...input);
const indexMax = input.indexOf(max);

console.log(max);
console.log(indexMax + 1);