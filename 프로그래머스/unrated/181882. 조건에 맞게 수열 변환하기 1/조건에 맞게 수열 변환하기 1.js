function solution(arr) {
    var answer = [];
    arr.forEach((a)=>{
        if(a>=50 && a%2===0){
            answer.push(a/2);
        } else if(a<50 && a%2!==0){
            answer.push(a*2);
        } else {
            answer.push(a);
        }
    })
    return answer;
}