function tellFortune (partner, kids, job, loc){
    return (`You will be a ${job} in ${loc}, and married to ${partner} with ${kids} kids`)
}

function calculateDogAge(age){
    return `dog age is ${age*7}`
}

function calculateSupply(age, amount){
    const maxage = 100
    return `You will need ${(100 - age) * 365 * amount} cups of tea to last you until the ripe old age of 100`
}

function greet(name){
    return `Hello ${name}`
}

/*
5
what is the error:
function double(cat) { x is undefined 
  return 2 * x;
}

function double(7) { 7 is not a var/ all parmetaers must be var
  return 2 * 7;
}

function double('7') { '7' is not a var
  return 2 * 'x';      and * must be between numbers but 'x' is char
}
*/



/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/


function double1(x){
    return 2*x;
}

function cube(x){
    return Number(x) ** 3
}

function multiply(x,y){
    return Number(x)*Number(y)
}



/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense(age){
    age = Number(age)
    return (age < 20 ? `please come back after ${20-age} years to get one` : "yes you can")
}



/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
function sameLength(str1, str2){
    return str1.length == str2.length
}

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer(x,y){
    return Math.max(x,y)
}

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

function smallerNubmer(x,y,z){
   return Math.min(Math.min(x,y) , z)
}

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterString(s1, s2, s3, s4, s5){
    let ans = ""
    if(s1.length > s2.length)
        ans = s2;
    else
        ans = s1;

    if(ans.length > s3)
        ans = s3;

    if(ans.length > s4)
        ans = s4;

    if(ans.length > s5)
        ans = s5;

    return ans;

}

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

function longerString(s1, s2, s3, s4){
    let ans = ""
    if(s1.length < s2.length)
        ans = s2;
    else
        ans = s1;

    if(ans.length < s3)
        ans = s3;

    if(ans.length < s4)
        ans = s4;

    return ans;

}


/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(x){
    return x%2==0
}

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/

function isOdd(x){
    return x%2!=0
}

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(x){
    return Math.abs(x)
}


/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(fn,ln){
    return (fn +" "+ ln)
}

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function average(x1,x2,x3,x4,x5){
    return (x1+x2+x3+x4+x5)/5
}

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber(){
    return Math.random();
}

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomBetweenNumbers(low,up){
    return (Math.random() * (up - low )) + low
}


/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/

function scoreInUniversty(x){
    if(mark < 50)
    return("F")
else if (mark < 70)
    return("D")
else if(mark < 85)
    return("C")
else if(mark < 95)
    return("B")
else 
    return("A")
}

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
let x = 1
function counter(){
    return x++;
}

alert(counter())

alert(counter())

alert(counter())

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/

function resetCounter(){
    let y = x-1;
    x = 1;
    return y;
}
