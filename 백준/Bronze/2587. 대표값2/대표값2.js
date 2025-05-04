const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const avg = input.reduce((a, b) => a + b) / input.length;
const mid = input.sort((a, b) => a - b)[2];
console.log(avg + '\n' + mid);