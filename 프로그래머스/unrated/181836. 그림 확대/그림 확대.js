function solution(picture, k) {
    var answer = [];
    picture.map((p)=>{
        const cur = [...p].map((c)=>c.repeat(k)).join("");
        for(let i=0; i<k; i++) answer.push(cur);
    })
    return answer;
}