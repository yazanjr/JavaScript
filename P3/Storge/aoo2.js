const form = document.getElementById("main")

form.addEventListener("submit", function(e){
    e.preventDefault()
    let data = new FormData(form)
    const dataObj = Object.fromEntries(data)
    console.log(dataObj)
    let key = localStorage.length
    sessionStorage.setItem(key, JSON.stringify(dataObj))

    const continer = document.getElementById("con")
    const newDiv = JSON.parse(sessionStorage.getItem(key))
    continer.innerHTML+= `
    <h1>${newDiv["subject"]}<h1>
    <p>${newDiv["description"]}<p>
    <h3>Studing ${newDiv["User"]}<h1>
    <h4>Technology used ${newDiv["Technology "]}<h1> `
})


