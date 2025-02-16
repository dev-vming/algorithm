function solution(n) {
    const arr = Array(parseInt(n/2)).fill("수박");
    if(n%2) arr.push("수");
    return arr.join('');
}