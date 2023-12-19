function solution(myString, pat) {
    var answer = 0;
    let str = myString.toLowerCase();
    let check = pat.toLowerCase();
    
    str.includes(check) ? answer++ : answer;
    return answer;
}