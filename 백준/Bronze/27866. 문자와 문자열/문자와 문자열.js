const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const i = input[1];

console.log(input[0][i-1]);