const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const set = [...new Set(arr)].sort((a, b) => a - b);
let answer = '';

const numMap = new Map();
for (let i = 0; i < set.length; i++){
  numMap.set(set[i], i);
}

for (x of arr) answer += numMap.get(x) + ' ';
console.log(answer);