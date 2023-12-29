function solution(order) {
    var answer = 0;
    order.map((o)=>{
        o.includes("anything") || o.includes("americano") ? answer+=4500 : answer += 5000
    })
    return answer;
}