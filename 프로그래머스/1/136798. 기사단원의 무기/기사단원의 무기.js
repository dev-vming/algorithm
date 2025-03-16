function solution(number, limit, power) {
    const arr = Array.from({length:number},(_,i)=>i+1);
    arr.map((num,i)=>{
        let result = [];
        let index = 1;
        while (index <= num / 2) {
            if (num % index === 0) result.push(index);
            index++;
        }
        result = [...result, num];
        result.length > limit ? arr[i] = power : arr[i] = result.length; 
    })
    return arr.reduce((a,b)=>a+b);
}
