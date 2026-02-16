function solution(s) {
    const sArr = s.split(' ');
    
    const jadenCase = sArr.map(str => {
        if (str === "") return "";
        
        const first = str[0].toUpperCase();
        const remain = str.slice(1).toLowerCase();
        
        return first + remain;
    })
    
    return jadenCase.join(' ');
}