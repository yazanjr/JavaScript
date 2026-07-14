const form = document.getElementById("main")

form.addEventListener("submit", function(e){
    e.preventDefault()
    let data = new FormData(form)
    const dataObj = Object.fromEntries(data)
    console.log(dataObj)
    let key = localStorage.length
    localStorage.setItem(key, JSON.stringify(dataObj))


    const continer = document.getElementById("con")
    const newDiv = JSON.parse(localStorage.getItem(key))
    continer.innerHTML+= `
    <h1>${newDiv["name"]}<h1>
    <h3>${newDiv["age"]} years old${newDiv["gender"]}<h3>
    <p>${newDiv["description"]}<p>
    <h3>Studing ${newDiv["major"]}<h1>
    <h4>and his favirot Programming languge is ${newDiv["pl"]}<h1> `
})


