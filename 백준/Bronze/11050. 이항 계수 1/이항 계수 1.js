const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

const [N, K] = input;

function factorial(n) {
  let answer = 1;
  for (let i = 2; i <= n; i++){
    answer *= i;
  }
  return answer;
}

console.log(factorial(N) / (factorial(N - K) * factorial(K)));