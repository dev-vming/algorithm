function solution(arr, divisor) {
    const answer = [];
    arr.map(n=>{
        n%divisor===0 && answer.push(n);
    })
    return answer.length ? answer.sort((a,b)=>a-b) : [-1];
}