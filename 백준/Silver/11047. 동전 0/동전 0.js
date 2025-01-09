const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

let [N, K] = input.shift().split(' ').map(Number);
let answer = 0;

for (let i = N - 1; i >= 0; i--){
  if (input[i] <= K) {
    answer += Math.floor(K / input[i])
    K %= input[i];
  }
}

console.log(answer);