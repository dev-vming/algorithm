function solution(schedules, timelogs, startday) {
    let dayOfWeek = startday
    let successPeople = 0;
    
    for(let i=0; i<schedules.length; i++){
        const time = schedules[i];
        const mm = time%100;
        let successDays = 0;
        for(let j=0; j<timelogs[i].length; j++){
            // 주말이라면 성공 횟수 추가
            if(dayOfWeek===6 || dayOfWeek===7){
                successDays++;
            // 주말이 아니라면 시간 확인 후 성공 횟수 추가
            } else{
                if(mm>=50){
                    timelogs[i][j]<=time+50 && successDays++;
                } else {
                    timelogs[i][j]<=time+10 && successDays++;
                }
            }
            // 요일이 7이면 다음 1로 변경 아니면 +1
            dayOfWeek===7 ? dayOfWeek=1 : dayOfWeek++;
        }
        // 7일 모두 성공 했다면 성공 인원 수 +1
        if(successDays===7) successPeople++;
    }
    
    return successPeople;
}