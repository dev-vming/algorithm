const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const  result = input.map(v => v % 42);
const set = new Set(result);

console.log([...set].length);
