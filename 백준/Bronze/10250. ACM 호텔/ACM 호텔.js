const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
input.shift();

for (let i = 0; i < input.length; i++){
  const [h, w, n] = input[i].split(' ');
  let x = Math.ceil(n / h).toString();
  let y = Math.ceil(n % h).toString();
  if (y === '0') y = h;
  if (x < 10) x = '0' + x;
  console.log(y + x);
}