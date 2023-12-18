function solution(todo_list, finished) {
    var answer = [];
    for(let i=0; i<finished.length; i++){
        !finished[i] && answer.push(todo_list[i])
    }
    return answer;
}