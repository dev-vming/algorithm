const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
input.splice(-1);
let testcase = input.map((a) => a.split(" ").map(Number).sort((a,b)=>a-b));

testcase.forEach((a) =>
  a[0] * a[0] + a[1] * a[1] == a[2] * a[2]
    ? console.log("right")
    : console.log("wrong")
);