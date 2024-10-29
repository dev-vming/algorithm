const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const subject = input[0];
const score = input[1].split(' ');

const max = Math.max(...score);
let sum = 0;

for (let i = 0; i < subject; i++ ) {
  sum += score[i] / max * 100;
}

console.log(sum/subject);