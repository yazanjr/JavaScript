const tableBody = document.getElementById("myTable")
const form = document.getElementById("main")

form.addEventListener("submit", function(e){
    e.preventDefault()
    let data = new FormData(form)
    const dataObj = Object.fromEntries(data)
    console.log(dataObj)


    const row = document.createElement("tr")

    Object.values(dataObj).forEach(el =>{
        const cell = document.createElement("td")
        cell.textContent = el
        row.appendChild(cell)
    })

    tableBody.appendChild(row)
})
