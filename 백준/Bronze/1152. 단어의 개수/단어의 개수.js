const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ');

console.log(input.includes('') ? 0 : input.length);