const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const num = input[0];
const size = input[1].split(' ');
const [T, P] = input[2].split(' ');

let T_bundle = 0;


// 티셔츠 묶음 수 계산하기
for (let i = 0; i < size.length; i++){
  size[i] % T == 0
    ? T_bundle += Math.floor(size[i] / T)
    : T_bundle += Math.floor(size[i] / T) + 1;
}


// 펜의 묶음 수와 낱개 주문 개수 구하기
const P_bundle = Math.floor(num / P);
const P_each = num % P;

console.log(T_bundle);
console.log(P_bundle, P_each);