function solution(lines) {
    let count = Array(200).fill(0);
    
    for(let i = 0; i<lines.length; i++){
        
        for(let j=lines[i][0]; j<lines[i][1]; j++){
            
        count[j+100] += 1;
    }
        }
    
    return count.filter(v => v>1).length;
}