const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const N = input.shift();
const arr = input.map(v => v.split(' ').map(Number)).sort((a, b) => a[1] - b[1] || a[0]-b[0]);

let cnt = 0;
let curTime = 0;

for (let [s, e] of arr) {
  if (s >= curTime) {
    cnt++;
    curTime = e;
  }
}

console.log(cnt);