function solution(n, numlist) {
    var answer = [];
    numlist.map((num)=>{
        num%n===0 && answer.push(num) 
    })
    return answer;
}