const [N,K] = require("fs").readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const answer = [];

for (let i = 1; i <= N; i++) {
  if (N % i === 0) answer.push(i);
}

if (answer.length < K) {
    console.log(0);
} else {
    console.log(answer[K - 1]);
}