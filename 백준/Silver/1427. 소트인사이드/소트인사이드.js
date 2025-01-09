const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const arr = input.split('').map(Number);
console.log(arr.sort((a, b) => b - a).join(''));

