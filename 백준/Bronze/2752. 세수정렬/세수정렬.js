const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);
const answer = input.sort((a, b) => a - b).join(' ');

console.log(answer);