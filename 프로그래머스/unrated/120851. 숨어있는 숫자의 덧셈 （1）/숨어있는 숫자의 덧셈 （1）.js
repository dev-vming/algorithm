function solution(my_string) {
    var answer = 0;
    const my_arr = my_string.split("");
    my_arr.map((a)=>{
        if(!isNaN(a)){
            answer+=Number(a)
        }
    })
    return answer;
}