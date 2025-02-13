function solution(arr) {
    const minNum = Math.min(...arr);
    const answer = arr.filter((v)=>v!==minNum);
    return answer.length ? answer : [-1];
}