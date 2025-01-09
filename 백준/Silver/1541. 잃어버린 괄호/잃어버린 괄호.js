const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const minusSplit = input.split('-');
const answer = [];

minusSplit.forEach((v) => {
  if (v.includes('+')) {
    let sum = 0;
    v = v.split('+').map(Number);
    v.forEach((i) => sum += i);
    answer.push(sum);
  } else {
    answer.push(Number(v));
  }
})

console.log(answer.reduce((a, b) => a - b));