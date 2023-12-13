function solution(intStrs, k, s, l) {
    var answer = [];
    intStrs.map((n)=>{
        let cutted_int = n.split("").splice(s,l).join("");
        if(cutted_int > k){
            answer.push(Number(cutted_int));            
        };
    })
    return answer;
}