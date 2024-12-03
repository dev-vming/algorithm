const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const N = input.shift();
const arr = [...new Set(input)];

const answer = arr.sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n');

console.log(answer);