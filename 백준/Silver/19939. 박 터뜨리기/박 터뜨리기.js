const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);
let [N, K] = input;

let summary = 0;
for (let i = 1; i < K + 1; i++){
  summary += i;
}

if (summary > N) {
  console.log(-1);
} else {
  N -= summary;
  if (N % K == 0) console.log(K - 1);
  else console.log(K);
}