const input = require("fs").readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const [A, T] = input;

const P = 10 + 2 * (25 - A + T);

console.log(P<0 ? 0 : P);
