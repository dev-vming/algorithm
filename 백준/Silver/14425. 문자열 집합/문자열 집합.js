const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const set = new Set(input.splice(0, N));
let answer = 0;

input.forEach(n => set.has(n) && answer++);

console.log(answer);