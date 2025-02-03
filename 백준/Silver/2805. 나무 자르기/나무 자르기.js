const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const trees = input[1].split(' ').map(Number);

let start = 1;
let end = Math.max(...trees);
let result = 0;

while (start <= end) {
  let total = 0;
  let mid = parseInt((start + end) / 2);
  for (x of trees) {
    if (x > mid) {
      total += x - mid;
    }
  }

  if (total < M) {
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }
}

console.log(result);