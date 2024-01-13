function solution(n) {
    let ans = [];
    
    let arr = new Array(n + 1).fill(0);
    
    arr.forEach((item, index) => {
        if(n % index == 0){
            ans.push(index);
        }
    })
    
    return ans;
}