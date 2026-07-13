let elment = document.querySelector("#hw")
elment.innerHTML="Hello Worldhh"
console.log(elment)

elment.onmouseover = function(){
    elment.style.display="inline";
    elment.style.backgroundColor="yellow";
    elment.style.fontweight="100"; 
}


select = document.getElementById("con")
const image1 = document.getElementById("jor")
const image2 = document.getElementById("nor")
select.onchange =function(){
    image1.style.display = "none";
    image2.style.display = "none";
    if(select.value == "Jordan"){
        image1.style.display="block";
        image2.style.display="none";
    }
    else{
        image2.style.display="block";
        image1.style.display="none";
    }
    
}




const input1 = document.getElementById("pas")
const label = document.getElementById("label")

input1.onkeydown = function(){
    if(input1.value.length < 4)
        label.style.display="inline"
    else
        label.style.display="none"
}


const input2 = document.getElementById("pas2")

input2.oninput = function(){
    
    if(input1.value != input2.value)
        label2.style.display="inline"
    else
        label2.style.display="none"

    console.log(input1.value)
    console.log(input2.value)
}



const hide = document.getElementById("hide")
const par = document.getElementById("par")
const show = document.getElementById("show")

hide.onclick = function(){
    par.style.display="none"
}

show.onclick = function(){
    par.style.display ="block"
}

const check = document.getElementById("cek")
check.onchange = function(){
    if(check.checked)
        par.style.fontWeight  = "bold"
    else
        par.style.fontWeight  = "200"
}


const num = document.getElementById("num")

num.oninput = function(){
    par.style.fontSize = num.value +"px"
}