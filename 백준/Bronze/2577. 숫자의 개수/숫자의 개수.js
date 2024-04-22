const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const [A, B, C] = input;
const mul = (A * B * C).toString();

const answer = new Array(10).fill(0);

for (let i = 0; i < mul.length; i++){
  answer[mul[i]]++;
}

console.log(answer.join('\n'));