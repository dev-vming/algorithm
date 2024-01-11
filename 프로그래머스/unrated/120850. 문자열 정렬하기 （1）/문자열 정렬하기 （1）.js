function solution(my_string) {
    var answer = [];
    const my_arr = my_string.split("");
    my_arr.map((a)=>{
        !isNaN(a) && answer.push(Number(a))
    })
    return answer.sort((a,b)=>a-b);
}