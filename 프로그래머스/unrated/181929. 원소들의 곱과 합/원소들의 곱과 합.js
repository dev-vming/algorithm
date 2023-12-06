function solution(num_list) {
    console.log(num_list);
    let sumpow=1;
    let x=0;
    for(let i=0; i<num_list.length; i++){
        sumpow = sumpow * num_list[i];
        x = x + num_list[i];
    }if (sumpow > Math.pow(x,2)) {
        return 0
    } else{
        return 1
    }
}