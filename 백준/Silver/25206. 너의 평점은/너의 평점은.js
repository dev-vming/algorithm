const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const cost = { "A+": 4.5, "A0": 4.0, "B+": 3.5, "B0": 3.0, "C+": 2.5, "C0": 2.0, "D+": 1.5, "D0": 1.0, "F": 0.0 };
let count = 0;
let sum = 0;

input.map((v) => {
  const [sub, score, grade] = v.split(' '); 
  if (grade !== "P") {
    count += Number(score);
    sum += cost[grade] * Number(score);
  }
})

console.log(sum / count);