let input = require("fs").readFileSync("/dev/stdin").toString().trim();
const croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

for (let i = 0; i < croatia.length; i++){
  if (input.includes(croatia[i])) input = input.split(croatia[i]).join('a');
  else continue;
}

console.log(input.length);