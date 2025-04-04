const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const N = Number(input);

for (let i = 0; i < 2 * N - 1; i++) {
  const star = i < N ? 2 * i + 1 : 2 * (2 * N - i - 1) - 1;
  const space = " ".repeat((2 * N - 1 - star) / 2);
  console.log(space + "*".repeat(star));
}