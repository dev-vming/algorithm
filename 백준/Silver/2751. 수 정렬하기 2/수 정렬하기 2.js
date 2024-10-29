const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const N = input.shift();
const nums = input.map(Number).sort((a, b) => a - b);

console.log(nums.join('\n'));