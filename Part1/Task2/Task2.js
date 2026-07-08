  let currentNumber = 1;
    let rowOutput = "";


    for (let row = 1; row <= 4; row++) {
        
        for (let col = 1; col <= row; col++) {
            rowOutput += currentNumber + " ";
            currentNumber++;
        }
        
        rowOutput += "\n";
    }
console.log(rowOutput)