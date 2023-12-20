function solution(strArr) {
    var answer = [];
    strArr.map((s,i)=>{
        i%2===0 ? answer.push(s.toLowerCase()) : answer.push(s.toUpperCase());
    })
    return answer;
}