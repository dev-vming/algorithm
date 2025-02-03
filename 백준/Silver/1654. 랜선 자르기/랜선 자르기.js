const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');


const [K, N] = input.shift().split(' ').map(Number);
const cables = input.map(Number);

let start = 1;
let end = Math.max(...cables);
let result = 0;

while (start <= end) {
  let total = 0;
  let mid = parseInt((start + end) / 2);
  for (x of cables) {
    if (x >= mid) {
      total += parseInt(x / mid);
    }
  }

  if (total < N) {
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }
}

console.log(result);