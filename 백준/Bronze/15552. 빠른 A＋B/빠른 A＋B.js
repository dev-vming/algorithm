const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = "";
const len = input[0];

for (let i = 1; i <= len; i++) {
  const nums = input[i].split(" ");
  answer += parseInt(nums[0]) + parseInt(nums[1]) + "\n";
}

console.log(answer);
