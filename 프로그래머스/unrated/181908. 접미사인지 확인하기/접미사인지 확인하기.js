function solution(my_string, is_suffix) {
    var answer = 0;
    for (let i = 0; i <my_string.length; i++){
        my_string.slice(i) === is_suffix ? answer += 1 : answer += 0;
    }
    return answer;
}