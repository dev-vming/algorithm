function solution(num) {
    let cnt = 0;
    if(num==1) return 0;
    while(num>1){
        if(cnt===500) return -1;
        if(num%2===0){
            num = parseInt(num/2);
            cnt++;
        } else {
            num = parseInt(num*3)+1;
            cnt++;
        }
    }
    return cnt;
}