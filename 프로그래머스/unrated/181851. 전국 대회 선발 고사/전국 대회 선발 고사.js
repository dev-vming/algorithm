function solution(rank, attendance) {
    var answer = 0;
    let arr =[]
    for(let i =0 ; i<rank.length; i++){
        attendance[i] === true && arr.push(rank[i]);
    }
    let [a,b,c] = arr.sort((a,b)=>a-b).slice(0,3);
    return (10000*rank.indexOf(a))+(100*rank.indexOf(b))+rank.indexOf(c);
}