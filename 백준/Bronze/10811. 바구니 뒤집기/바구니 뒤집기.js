const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
let arr = Array.from({ length: N }, (_, i) => i + 1);

input.map((e) => {
  const [i, j] = e.split(" ").map(Number);
  const reversed = arr.slice(i - 1, j).reverse();
  arr.splice(i - 1, j - i + 1, ...reversed);
})

console.log(arr.join(' '));