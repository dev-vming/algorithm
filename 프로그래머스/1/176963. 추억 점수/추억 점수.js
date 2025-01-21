function solution(name, yearning, photo) {
    const obj = {};
    const answer = [];
    
    for(let i=0; i<name.length; i++){
        obj[name[i]]=yearning[i];
    }
    
    for(let i=0; i<photo.length; i++){
        answer.push(photo[i].map(v => obj[v] || 0).reduce((a,b)=>a+b));
    }
    
    return answer;
}