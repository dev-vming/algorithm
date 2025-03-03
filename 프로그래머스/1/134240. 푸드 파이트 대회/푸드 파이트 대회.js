function solution(food) {
    let line = '';
    for(let i =1; i<food.length; i++){
        line += String(i).repeat(Math.floor(food[i]/2));
    }
    return line+"0"+line.split('').reverse().join('');
}