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