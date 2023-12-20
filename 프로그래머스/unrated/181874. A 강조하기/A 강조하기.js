function solution(myString) {
    let answer = ""
    for(let i = 0; i<myString.length; i++){
        myString[i] === "a" || myString[i] === "A" ? answer += myString[i].toUpperCase() : answer += myString[i].toLowerCase();
    }
    return answer;
}