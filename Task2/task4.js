function multiplication2 (x,y){
    let ans = 0;
    for(let i = 0; i < y; i++)
        ans += x;
    return ans
}

alert(multiplication2(2,3))