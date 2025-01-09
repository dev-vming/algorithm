const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

console.log(arr.sort((a, b) => a - b)[K-1]);
