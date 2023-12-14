function solution(my_string, m, c) {
    var answer = '';
    for (let i = 0; i <my_string.length; i+=m){
        let cutted_str = my_string.substr(i,m);
        answer += cutted_str[c-1];
        
    }
    return answer;
}