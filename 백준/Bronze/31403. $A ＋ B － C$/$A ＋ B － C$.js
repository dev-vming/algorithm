const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const [A, B, C] = input.split('\n');

console.log(Number(A) + Number(B) - Number(C));
console.log(A + B - C);