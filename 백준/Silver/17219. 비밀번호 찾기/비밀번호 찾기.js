const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const passwordMap = new Map();
const answer = [];

for (let i = 0; i < N; i++){
  const [address, password] = input[i].split(' ');
  passwordMap.set(address, password);
}

for (let j = N; j < N + M; j++){
  answer.push(passwordMap.get(input[j]));
}

console.log(answer.join('\n'));