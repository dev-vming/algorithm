function solution(myString) {
    let arr = myString.split("x");
    return arr.sort().filter((v)=>v !== "");
}