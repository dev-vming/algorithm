function solution(strArr) {
    var answer = [];
    strArr.map((str)=>{
        str.includes('ad') ? str : answer.push(str)
    }) 
    return answer;
}