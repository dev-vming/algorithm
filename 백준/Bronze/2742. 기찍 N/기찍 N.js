const input = require("fs").readFileSync('/dev/stdin').toString().trim();

const N = Number(input);

for (let i = N; i > 0; i--){
    console.log(i);
}
