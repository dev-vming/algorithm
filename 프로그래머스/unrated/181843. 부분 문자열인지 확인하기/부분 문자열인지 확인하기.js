function solution(my_string, target) {
    var answer = 0;
    my_string.includes(target) && answer++;
    return answer;
}