function solution(n) {
    const x = Math.sqrt(n);
    let answer = 0;
    Number.isInteger(x) ? answer = Math.pow(x+1,2) : answer = -1;
    return answer;
}