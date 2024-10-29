const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(' ');

const [num1, num2] = input; 

// 최대공약수 구하기
let getGCD = (num1, num2) => (num1 % num2 ? getGCD(num2, num1 % num2) : num2);

// 최소공배수 구하기 (두 수를 곱한 값을 최대 공약수로 나누어도 같은 값 )
let getLCM = (num1, num2) => {
  let lcm = 1;

  while(true){
    if((lcm % num1 == 0) && (lcm % num2 == 0)) break;
    lcm++;
  }
  return lcm
}


console.log(getGCD(num1, num2));
console.log(getLCM(num1, num2));