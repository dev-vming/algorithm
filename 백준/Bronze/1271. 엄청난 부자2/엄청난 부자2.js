const input = require("fs").readFileSync('/dev/stdin').toString().trim().split(' ');

const N = BigInt(input[0]);
const M = BigInt(input[1]);

console.log((N / M).toString());
console.log((N % M).toString());
