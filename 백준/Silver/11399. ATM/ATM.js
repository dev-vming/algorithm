const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);
let answer = 0;

for (let i = 0; i < N; i++){
  for (let j = i; j >= 0; j--){
    answer += arr[j];
  }
}

console.log(answer);