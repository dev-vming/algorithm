const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const N = input.shift();

function palindrome(x) {
  return x == x.split('').reverse().join('');
}

for (str of input) {
  if (palindrome(str)) console.log(0);
  else {
    let found = false;
    let len = str.length;
    for (let i = 0; i < parseInt(len / 2); i++){
      if (str[i] != str[len - i - 1]) {
        if (palindrome(str.slice(0, i) + str.slice(i + 1, len))) found = true;
        if (palindrome(str.slice(0, len - i - 1) + str.slice(len - i, len))) found = true;
        break;
      }
    }
    if (found) console.log(1);
    else console.log(2);
  }
}