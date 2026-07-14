import {jsonObject} from "./data.js";

const obj = JSON.parse(jsonObject) 

const tbody = document.getElementById("myTable")
console.log(obj)
Object.values(obj["users"]).forEach(el =>{
    const row = document.createElement("tr")
    const cell = document.createElement("td")
    const cell1 = document.createElement("td")
    const cell2 = document.createElement("td")
    cell.textContent=el["firstName"]
    row.appendChild(cell)
    cell2.textContent= el["email"]
    row.appendChild(cell2)
    cell1.textContent=el["phone"]
    row.appendChild(cell1)

    tbody.appendChild(row)
})

const button = document.getElementById("button")

const table = document.getElementById("table")
button.addEventListener("click",function(){
    table.style.display="block"
} )

button.addEventListener("dblclick",function(){
    table.style.display="none"
} )