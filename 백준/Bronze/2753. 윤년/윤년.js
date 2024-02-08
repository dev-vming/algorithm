const input = require('fs').readFileSync("/dev/stdin").toString().trim();
const year = parseInt(input);

year%4===0 && (year%100!==0 || year%400===0) ? console.log(1) : console.log(0);
    
