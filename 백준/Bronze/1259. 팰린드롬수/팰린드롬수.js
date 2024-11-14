const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

for (let i = 0; i < input.length - 1; i++){
  const reversed = input[i].split('').reverse().join('');
  if (input[i] === reversed) {
    console.log('yes');
  } else {
    console.log('no');
  }
}