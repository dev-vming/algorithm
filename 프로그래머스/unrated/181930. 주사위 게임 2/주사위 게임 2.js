function solution(a, b, c) {
    var answer = 0;
    let a1 = a+b+c;
    let a2 = Math.pow(a,2)+Math.pow(b,2)+Math.pow(c,2);
    let a3 = Math.pow(a,3)+Math.pow(b,3)+Math.pow(c,3);
    
    if (a === b && b === c){
        answer += (a1*a2*a3);
    } else if (a !== b && b !== c && a !== c) {
        answer += a1;
    } else if (a == b || a == c || b == c){
        answer += (a1*a2);
    }
    return answer;
}