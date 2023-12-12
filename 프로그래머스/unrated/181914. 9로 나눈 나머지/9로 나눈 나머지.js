function solution(number) {
    var answer = 0;
    for(n of number){
        answer += Number(n)
    }
    return answer%9;
}