const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const num = Number(input[2]);
const arr = input[1].split(' ').filter(v => +v === num);

console.log(arr.length);
