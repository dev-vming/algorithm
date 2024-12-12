const input = require("fs").readFileSync("/dev/stdin").toString().split('\n');
const N = input.shift();
let cnt = 0;

function check(data) {
  let nums = new Set(data[0]);
  for (let i = 0; i < data.length; i++){
    if (data[i] !== data[i + 1]) {
      if (nums.has(data[i + 1])) {
        return false;
      } else {
        nums.add(data[i + 1]);
      }
    }
  }
  return true;
}

for (let i = 0; i < N; i++) {
  cnt += check(input[i]);
}

console.log(cnt);

