
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const N = Number(input[0]);
const balloon = input[1].split(' ').map(Number);

const arrow = Array(N + 1).fill(0);
let cnt = 0;

for (let i = 0; i < N; i++){
  if (arrow[balloon[i]] > 0) {
    arrow[balloon[i]]--;
    arrow[balloon[i] - 1]++;
  } else {
    arrow[balloon[i] - 1]++;
    cnt++;
  }
}

console.log(cnt);
