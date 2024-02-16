const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length; i++){
  let nums = input[i].split(' ');
  console.log(parseInt(nums[0])+parseInt(nums[1]));
}