function solution(arr, k) {
    var answer = [];
    const uniqueArr = arr.filter((el,i)=>arr.indexOf(el)===i)
    for(let i=0; i<k; i++){
        uniqueArr[i] == null ? answer.push(-1) : answer.push(uniqueArr[i])
    }
    return answer;
}