function solution(numbers) {
    var answer = 0;
    numbers.map((n)=>{
        answer+=n
    })
    return answer/numbers.length;
}