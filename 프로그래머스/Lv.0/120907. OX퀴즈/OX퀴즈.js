function solution(quiz) {
    var answer = [];
    quiz.map((q)=>{
        q.split(" ")[1]==="+" 
            ? Number(q.split(" ")[0])+Number(q.split(" ")[2]) == Number(q.split(" ")[4]) ? answer.push("O") : answer.push("X")
        : Number(q.split(" ")[0])-Number(q.split(" ")[2]) == Number(q.split(" ")[4]) ? answer.push("O") : answer.push("X")
    })
    return answer;
}