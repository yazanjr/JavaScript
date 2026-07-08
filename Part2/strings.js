const { replace } = require("react-router-dom")

//1
let str = "hello" + " " + "world"

//2
str = "JavaScript"
console.log(str.length)


//3
str = "Programming"
console.log(str[0])



//4
str = "coding is fun"
console.log(str.substring(str.indexOf('c'),str.indexOf('g')+1))


//5
str = "cataa";
str = str.replace('a','e')
str = str.replace('a','e')
console.log(str)


//6
str = "javascript";
str= str.toUpperCase()
console.log(str)


//7
str = "apple,banana,orange";
arr = str.split(",");
console.log(arr)


//8
arr = ["hello", "world"]
str = arr.join(" ")
console.log(str)

//9
str = " hello world ";
str = str.trim();
console.log(str)

//10
console.log(str.includes("world"))

//11
str = "hello"
arr = str.split("");
arr = arr.reverse();
str = arr.join("");
console.log(str);

//12 
str = "elephant"
console.log(str.split("e").length-1)


//13
str = "racecar"
arr = str.split("")
arr = arr.reverse();
console.log(str == arr.join("")? true:false )

//14
str = "hello world"
str = str.trim()
arr = str.split(" ")
for(let i =0; i < arr.length; i++){
    let c = arr[i];
    arr[i] = c.replace(c[0], c[0].toUpperCase())
}
str = arr.join(" ")
console.log(str)



//15
let x = 1234.5678
console.log(x.toFixed(2))



//16
str = "There are 3 apples and 2 oranges"
arr = [];
for(let i = 0; i< str.length; i++){
    if(str[i] != " " && !isNaN(Number(str[i])))
        arr.push(str[i])
}
console.log(arr)


//17
str = "example@email.com"
if(str.indexOf('@') < str.indexOf('.'))
    console.log("Vaild")
else
    console.log("Invaild")


//18
str = "This is a bad word"
str = str.replace("bad","good")
console.log(str)


//19
str = "aabbc"
arr = []
for(let i = 0; i < str.length; i++){
    if(!arr.includes(str[i]))
        arr.push(str[i])
}
str = arr.join("")
console.log(str)


//20
str = "hello"
str = str.split("").sort().join("")
console.log(str)


//21
str = "listen", str2 = "silent"
anagrams = true;
for(i of str){
    if(!str2.includes(i))
        anagrams = false;
}
console.log(anagrams)


//22
str = "The quick brown fox"
str = str.split(" ").reverse().join(" ")
console.log(str)


//23
str = "Web development is fascinating"
max = str.split(" ").sort((a,b) => a.length - b.length)
console.log(max[max.length-1])


//24
str = "A man, a plan, a canal, Panama!"
str = str.toLowerCase();
str = str.replace(/[^a-z0-9]/g, "");
console.log(str.split("").reverse().join("")==str)


//25
const freq = {}
str = "mississippi"
for(let i = 0; i < str.length; i++){
    if(freq[str[i]]){
        freq[str[i]]++;
    }
    else 
        freq[str[i]] = 1;
}
console.log(freq)


//26
const vowels = {'a':1, "e":2, "i":3, "o":4, "u" :5}
str = "Hello World"
str = str.split("")
for(let i = 0; i < str.length; i++){
    if(vowels[str[i]]){
        str[i] = str[i].replace(str[i],vowels[str[i]]);
    }

}
str = str.join("")
console.log(str)


/*
26.	Replace Vowels with Numbers
•	Question: Write a function that replaces vowels in a string with their corresponding numbers (a=1, e=2, i=3, o=4, u=5).
•	Input: "Hello World"
•	Expected Output: "H2ll4 W4rld"


*/