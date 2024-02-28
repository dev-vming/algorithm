const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const nums = input[1].split('').map(Number);

const sum = nums.reduce((prev, cur) => prev += cur, 0);

console.log(sum);