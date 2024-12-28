const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const N = input.shift();
const answer = [];

for (let i = 0; i < N; i++) {
  let cnt = 0;

  for (let c of input[i]) {
    cnt += c === '(' ? 1 : -1;

    if (cnt < 0) break;
  }

  answer.push(cnt === 0 ? 'YES' : 'NO');
}

console.log(answer.join('\n'));
