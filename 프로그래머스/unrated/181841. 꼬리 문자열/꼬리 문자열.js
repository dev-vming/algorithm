function solution(str_list, ex) {
    var answer = '';
    str_list.map((s)=>{
        s.includes(ex) ? "" : answer+= s
    })
    return answer;
}