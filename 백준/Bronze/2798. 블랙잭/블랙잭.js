const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const N = input[0].split(' ')[0];
const M = input[0].split(' ')[1];
const cards = input[1].split(' ').map(Number);

let max = 0;

for (let i = 0; i < N; i++){
  for (let j = 0; j < N; j++){
    for (let k = 0; k < N; k++){
      // 같은 카드가 나온다면 다음 루프 진행
      if (i == j || j == k || i == k) continue;

      // 다른 카드라면 합을 더해 저장된 max, 최댓값과 비교 후 조건에 맞을 시 저장
      const sum = cards[i] + cards[j] + cards[k];
      if (sum > max && sum <= M) {
        max = sum;
      }

      // 최댓값과 동일하다면 루프 종료
      if (max == M) break;
    }
  }
}

console.log(max);