const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const [N,M] = input.shift().split(' ').map(Number);
let arr = new Array(N).fill(0);

for (let i = 0; i < M; i++){
  const [a, b, c] = input[i].split(' ').map(Number);
  for (let j = a - 1; j < b; j++){
    arr[j] = c;
  }
}

console.log(arr.join(' '));