function solution(str_list) {
    var answer = [];
    for(let i=0; i<str_list.length; i++){
        switch(str_list[i]){
            case 'l':
                return str_list.slice(0,i);
                break;
            case 'r':
                return str_list.slice(i+1);
                break;
        }
    }
    return answer;
}