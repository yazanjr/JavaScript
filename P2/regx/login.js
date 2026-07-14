login = document.getElementById("sub")

login.addEventListener("click",function(){
    email = document.getElementsByTagName("input")[0].value
    password = document.getElementsByTagName("input")[1].value
    if(localStorage.getItem(email)){
        if(JSON.parse(localStorage.getItem(email))["Password"] == password)
            alert("Welcome")
        else alert("Wronge Password")

    }else{
        alert("Singup first")
    }
})