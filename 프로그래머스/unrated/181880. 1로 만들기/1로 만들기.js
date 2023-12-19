function solution(num_list) {
    var answer = 0;
    num_list.map((n)=>{
        while(n>1){
            n%2===0 ? n = n/2 : n = (n-1)/2;
            answer += 1;
        }
    })
    return answer;
}