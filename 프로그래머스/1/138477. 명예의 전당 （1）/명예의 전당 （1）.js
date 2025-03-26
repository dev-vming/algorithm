function solution(k, score) {
    const answer = [];
    const list = [];
    score.map((num,idx)=>{
        if(idx+1<=k){
            list.push(num);
            answer.push(Math.min(...list));
        } else {
            list.sort((a,b)=>b-a);
            if(list[list.length-1]<num){
                list.pop();
                list.push(num);
            }
            answer.push(Math.min(...list));
        }
    })
    return answer;
}