const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const answer = input.reduce((a, b) => a + b, 0);

console.log(answer);