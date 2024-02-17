const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const max = Number(input[0].split(' ')[1]);
const arr = input[1].split(' ').filter(v => v < max);

console.log(arr.join(' '));