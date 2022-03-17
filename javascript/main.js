/*
var x = 5;
var y = 6;
var z = x + y;

console.log(z+x)

let c = 1;
let b = 8;
let u = c + b;
console.log(u)


const price1 = 5;
const price2 = 6;
let total = price1 + price2;
console.log(total);


let Age = 5;
console.log(Age)


let vary;
vary = 4;
console.log(vary)

let student1 = "Tolu", student2 = 'Bunmi';
console.log(student1)
console.log(student2)

let weight = 5.8;
console.log(weight)

let avaliable = false;
console.log(avaliable)

let carName = "Volvo"; 


// var question = prompt("Enter your name: ");
// document.getElementById("demo").innerHTML = question;


write a program that ask a user of ask a user of his / her name, age, address and 
phone number then your program should display the values on the html webpage.


// alert("Welcome to ATC " + question)

let num1 = 9, num2 = 10;
console.log("*************")
console.log(num1 * num2)
console.log(num1 - num2)
console.log(num1 / num2)
console.log(num1 + num2)
console.log(num1 ** num2)
console.log(num2 % num1)

*/

/*
ASSIGNMENT

Write a program with javascript to calculate the number of seconds in a week
then display your answer on the html webpage
*/


// 15/03/2022
/*
let number1 = 5
let number2 = 10
console.log(number2 % number1)

// Object

let grade = {
    math: 90,
    english: 100,
    chemistry: 50,
    physics: 100
}


console.log(grade.math)


function addition() {
    return demo.innerHTML = "Hello World"
  }


const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
        return this.firstName + " " + this.lastName + " " + this.id;
    }
};

person["Color"] = "White"
person['firstName'] = "Habeeb"
console.log(person)


const cars = ["Saab", "Volvo", "BMW"]
const fruits = [
    "mango", 
    "pawapaw", 
    "orange", 
    "banana", 
    "apple"
]
console.log(fruits[2] + " " + fruits[0])
fruits.push("Pineapple")
fruits.shift()
fruits.unshift("Pear")
delete fruits[0];
console.log(fruits.length)

const bike = new Array("Power Bike", "Boosteeh Bike", "Suzuki", "Honda")
console.log(bike[1])

const new_fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = new_fruits.toString();

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren)

const fruit = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruit.slice(3);
console.log(citrus)

const fruis = ["Banana", "Orange", "Apple", "Mango"];
fruis.splice(2, 2, "Lemon", "Kiwi");
console.log(fruis)
*/

let y = 4
let z = 15
if (y == z ){
    console.log("Hello World!")
}

else if (y > z){
    console.log("Greater")
}

else if (y < z){
    console.log("Less")
}
else{
    console.log("Plan B executed")
}



alert("Welcome to my website kindly sign up before you can login to access your dashboard")

let username, password
username = prompt("Enter your prefered username")
password = prompt("Enter your prefered password")

const data = {
    "username": username,
    "password": password
}

alert("Signup successful, kindly proceed to login by clicking ok")
let loginUsername = prompt("Enter username")
let loginPassword = prompt("Enter password")

if ((data["username"] == loginUsername) && (data["password"] == loginPassword)){
    alert("Login Successful")
    user.innerHTML = loginUsername
}

else if ((data["username"] == loginUsername) && (data["password"] != loginPassword)){
    alert("Password Incorrect")
}

else if ((data["username"] != loginUsername) && (data["password"] != loginPassword)){
    alert("Username and Password Incorrect")
}

/*
Three friends went to eat in a resturant and the their total bill was
N10,000. Write a program with javascript to calculate how much each of 
them would pay if they are to leave 30% to their total bill.


A store is making discount on sales, write a program to ask a user how much
his or her purchase is. If the user purchase price is less than N2000 then
the user should have 10% discount on his / her purchase, if the user purchase
price is between N2000 and N5000 then the user should have 20% discount and if
the purchase if above N5000 then the user should have 30% discount.

Then your program should display the initial price, discount price and new
purchase price after removing the discount price from it.

NOTE: Ensure your display your output on the console and also the webpage.
*/