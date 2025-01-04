const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, A, M, B] = input.map(v => v.split(" "));
const answer = [];

const checkMap = new Map();

for (number of A) {
  if (checkMap.has(number)) checkMap.set(number, checkMap.get(number) + 1);
  else checkMap.set(number, 1);
}

for (number of B) {
  if (checkMap.has(number)) answer.push(checkMap.get(number));
  else answer.push(0);
}

console.log(answer.join(' '));
