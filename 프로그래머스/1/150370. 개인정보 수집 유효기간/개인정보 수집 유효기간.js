function solution(today, terms, privacies) {
    
    const answer = [];
    const termObj = {};
    const [todayY,todayM,todayD]=today.split('.').map(Number);
    const todayDate = todayY*12*28 + todayM*28 + todayD;
    
    terms.map((v)=>{
        const [type, period] = v.split(' ');
        termObj[type] = Number(period);
    });
    
    privacies.map((privacy,idx)=>{
        const [date,type] = privacy.split(' ');
        let [YYYY,MM,DD] = date.split('.').map(Number);
        MM += termObj[type];
        
        const periodDate = YYYY*12*28 + MM*28 + DD;
        if(todayDate>=periodDate) answer.push(idx+1);
    })
    return answer;
}