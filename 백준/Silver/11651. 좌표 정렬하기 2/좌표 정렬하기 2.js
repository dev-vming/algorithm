const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const N = input.shift();
const coordinates = input.map(v => v.split(' ').map(Number));

coordinates.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

const answer = coordinates.map(v => v.join(' ')).join('\n');

console.log(answer);