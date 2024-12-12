const input = require("fs").readFileSync("/dev/stdin").toString().split('\n');

const line = input.shift();
let answer = '';

for (let i = 0; i < line; i++){
  const C = input[i].split(' ').map(Number);
  const N = C.shift();
  const avg = (C.reduce((a, b) => a + b)) / N;
  
  answer += ((C.filter((v) => v > avg).length) / N * 100).toFixed(3) + '%' + '\n';
}

console.log(answer);
