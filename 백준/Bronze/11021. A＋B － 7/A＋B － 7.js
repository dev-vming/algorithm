const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const N = input.shift();
const answer = [];

input.map((nums,i) => {
  const [A, B] = nums.split(' ').map(Number);
  answer.push(`Case #${i + 1}: ${A + B}`);
})

console.log(answer.join('\n'));