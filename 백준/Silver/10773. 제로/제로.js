const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

const K = input.shift();
const arr = [];

for (let i = 0; i < K; i++){
  input[i] === 0 ? arr.pop() : arr.push(input[i]);
}

console.log(arr.reduce((prev, cur) => prev + cur,0));