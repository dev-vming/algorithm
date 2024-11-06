const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

const [A, B, V] = input;

console.log(Math.ceil((V - B) / (A - B)));