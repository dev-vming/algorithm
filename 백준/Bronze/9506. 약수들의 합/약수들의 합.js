const input = require("fs").readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

for (let i = 0; i < input.length - 1; i++){
  const divisors = [];
  for (let j = 1; j < input[i]; j++){
    if (input[i] % j === 0) divisors.push(j);
  }
  const sum = divisors.reduce((a, b) => a + b);
  if (sum === input[i]) {
    console.log(input[i] + ' = ' + divisors.join(' + '));
  } else {
    console.log(input[i] + ' is NOT perfect.');
  }
}
