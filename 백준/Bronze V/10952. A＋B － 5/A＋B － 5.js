const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const len = input.length;

for (let i = 0; i < len-1; i++){
  let nums = input[i].split(' ');
  console.log(parseInt(nums[0]) + parseInt(nums[1]));
}