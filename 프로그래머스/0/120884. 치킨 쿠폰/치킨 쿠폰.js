function solution(chicken) {
    let coupon = chicken;
    let service = 0;
    
    while(coupon >= 10){        
        const cnt = Math.floor(coupon / 10);
        coupon -= cnt*10;
        service += cnt;
        coupon += cnt;
    }
    return service;    
}