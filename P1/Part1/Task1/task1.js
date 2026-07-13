let op = prompt("Operation")
let num1 = Number(prompt("First number"))
let num2 = Number(prompt("seconde number"))

switch(op){
    case "+":
        document.write(num1 + num2)
        break;
    case "-":
        alert(num1 - num2)
        break;
    case "*":
        alert(num1 * num2)
        break;
    case "/":
        alert(num1 / num2)
        break;
}
