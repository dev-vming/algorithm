const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const [length, width, height] = input.shift().split(' ').map(Number);
const N = input.shift();
const arr = input.map(v => v.split(' ').map(Number));

let cubes = Array(20).fill(0);
for ([a,b] of arr) {
  cubes[a] = b;
}

function nearestSquare(x) {
  let i = 1;
  while ((2 ** i) <= x) i += 1;
  return i - 1;
}

let size = 19;
size = nearestSquare(length);
size = Math.min(size, nearestSquare(width));
size = Math.min(size, nearestSquare(height));

let res = 0;
let used = 0;

for (let i = size; i >= 0; i--){
  used *= 8;
  cur = (2 ** i);
  let required = parseInt(length / cur) * parseInt(width / cur) * parseInt(height / cur) - used;

  let usage = Math.min(required, cubes[i]);
  res += usage;
  used += usage;
}

if (used == length * width * height) console.log(res);
else console.log(-1);

