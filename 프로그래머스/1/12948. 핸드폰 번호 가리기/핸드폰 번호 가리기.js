function solution(phone_number) {
    let answer = "";
    phone_number.split('').map((n,i)=>{
        i<phone_number.length-4 ? answer += "*" : answer += n;
    })
    return answer;
}