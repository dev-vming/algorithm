const input = require("fs").readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const [x, y, w, h] = input;

console.log(Math.min(w - x, x - 0, h - y, y - 0));