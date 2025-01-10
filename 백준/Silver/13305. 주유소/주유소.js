const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const N = Number(input[0]);
const km = input[1].split(' ').map(BigInt);
const gasCost = input[2].split(' ').map(BigInt);

let cost = BigInt(0);
let minCost = gasCost[0];

for (let i = 0; i < N-1; i++){
  if (gasCost[i] < minCost) {
    minCost = gasCost[i];
  }
  cost += km[i] * minCost;
}

console.log(String(cost));