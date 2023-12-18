function solution(num_list) {
    var answer = 0;
    let answer2= 0;
    for(let i =0; i<num_list.length; i++){
        if(i%2===0){
            answer += num_list[i];
        } else {
            answer2 += num_list[i];
        }
    }
    return answer > answer2 ? answer : answer2;
}