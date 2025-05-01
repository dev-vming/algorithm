function solution(n, arr1, arr2) {
    const answer = [];
    for(let i=0; i<n; i++){
        const n1 = arr1[i].toString(2).padStart(n, '0');
        const n2 = arr2[i].toString(2).padStart(n, '0');
        let line = '';
        for(let j=0; j<n; j++){
            (n1[j]==='0' && n2[j]==='0') ?line+=' ':line+="#"
        }
        answer.push(line);
    }
    
    return answer;
}