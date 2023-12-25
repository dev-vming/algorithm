function solution(arr, n) {
    var answer = [];
    if(arr.length%2!==0){
        arr.map((a,i)=>i%2===0?answer.push(a+n):answer.push(a))
    } else{
        arr.map((a,i)=>i%2!==0?answer.push(a+n):answer.push(a))
    }
    return answer;
}