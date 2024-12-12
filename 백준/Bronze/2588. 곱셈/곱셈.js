const input = require("fs").readFileSync("/dev/stdin").toString().split('\n');
const [N1, N2] = input;
const answer = [];

for (let i = 2; i >= 0; i--){
  answer.push(Number(N1) * Number(N2[i]));
}
answer.push(Number(N1) * Number(N2));


console.log(answer.join('\n'));