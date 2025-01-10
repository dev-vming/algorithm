const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const T = input.shift();
const answer = [];

for (let i = 0; i < T; i++){
  const N = input.shift();
  const arr = input.splice(0, N).map(v => v.split(' ').map(Number)).sort((a, b) => a[0] - b[0]);
  
  let cnt = 0;
  let minY = 100001;
  
  for (let [x, y] of arr) {
    if (y < minY) {
      minY = y;
      cnt++;
    }
  }
  answer.push(cnt);
}

console.log(answer.join('\n'));