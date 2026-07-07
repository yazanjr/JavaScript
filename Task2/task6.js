function ispandigital(x){
    const flags = [0,0,0,0,0,0,0,0,0,0]
    if(x[0] == 0)
        flags [0] = 1
    x = Number(x)
    while(x > 0){
        let tem = x %10
        flags[tem] = 1;
        x = Math.floor(x / 10);
    }
    for(let i = 0; i < 10; i++)
            if(flags[i] == 0)
                return false;
        return true;
}

alert(ispandigital((prompt("enter number"))))