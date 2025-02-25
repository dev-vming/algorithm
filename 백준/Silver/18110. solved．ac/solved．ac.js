const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const n = parseInt(input.shift());
const opinions = input.map(Number).sort((a, b) => a - b);
const limit = Math.round(n * 0.15);

const arr = opinions.slice(limit, n - limit);
const avg = Math.round(arr.reduce((acc, cur) => acc + cur, 0) / arr.length);

console.log(n===0 ? 0 : avg);