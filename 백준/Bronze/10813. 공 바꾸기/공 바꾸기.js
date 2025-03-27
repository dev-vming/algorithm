const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
let arr = Array.from({ length: N }, (_, i) => i + 1);

input.map((v) => {
  const [i, j] = v.split(' ').map(Number);
  const temp = arr[i - 1];
  arr[i - 1] = arr[j - 1];
  arr[j - 1] = temp;
})

console.log(arr.join(' '));
