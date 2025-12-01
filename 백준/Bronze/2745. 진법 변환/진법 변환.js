const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const N = input[0];
const B = Number(input[1]);

const answer = parseInt(N, B);

console.log(answer);