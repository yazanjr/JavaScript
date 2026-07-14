submit = document.getElementById("submit");

function sub(){
    let obj = {}
    let k =" "
    document.querySelectorAll("input").forEach(element => {
        //obj.element.placeholder = element.value
        let key = (element.placeholder)
        let val = (element.value)
        if (key) {
            obj[key] = val; 
        }
        if(key == "Email")
            k = val
    });
    if(obj.length != 0){
        localStorage.setItem(k,JSON.stringify(obj))
    }
}
submit.onclick = function(){
    sub()
    
Object.entries(localStorage).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
}


