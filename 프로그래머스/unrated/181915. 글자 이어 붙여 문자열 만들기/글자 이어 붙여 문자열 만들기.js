function solution(my_string, index_list) {
    var answer = '';
    for(n of index_list) {
        answer += my_string[n];
    }
    return answer;
}