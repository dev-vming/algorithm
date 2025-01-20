function solution(bandage, health, attacks) {
    const [healTime, healAmount, healBonus] = bandage;
    let currentHealth = health;
    let time = 0;
    
    for([atkTime,damage] of attacks){
        const timeDiff = atkTime - time - 1;
        const success = Math.floor(timeDiff / healTime);
        currentHealth += healAmount*timeDiff+success*healBonus;
        if(currentHealth>=health) currentHealth=health;
        currentHealth -= damage;
        time = atkTime;
        if (currentHealth <= 0) return -1;
    }
    return (currentHealth>0) ? currentHealth : -1;
}