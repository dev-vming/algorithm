const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const N = input.shift();
const coordinate = input.map(v => v.split(' ').map(Number));

const answer = coordinate.sort((a, b) => a[0] - b[0] || a[1]-b[1]);

console.log(answer.map(v => v.join(' ')).join('\n'));