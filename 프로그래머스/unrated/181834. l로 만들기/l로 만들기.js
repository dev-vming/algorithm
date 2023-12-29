function solution(myString) {
    var answer = [];
    const arr = myString.split("");
    arr.map((s)=>{
        /[a-k]/.test(s) ? answer.push("l") : answer.push(s)
    })
    return answer.join("");
}