function solution(myString) {
    var answer = [];
    let arr = myString.split("x");
    arr.map((a)=>{
        answer.push(a.length);
    })
    return answer;
}