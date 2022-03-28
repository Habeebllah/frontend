function myFunction1() {
    var element = document.getElementById("text");
    element.classList.toggle("dark-mode");
 }

/*
 // Function to toggle the bar
 function geeksforgeeks() {
    var x = document.getElementById("menus");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


// Function to toggle the plus menu into minus
function myFunction(x) {
    x.classList.toggle("fa-minus-circle");
}

*/
/*
const data = []
for (i=1; i < 101; i++) {
    if((i%5==0) && (i%3==0)){
        console.log("fizzbuzz")
        data.push("fizzbuzz")
    }
    else if(i%5==0){
        console.log("buzz")
        data.push("buzz")
    }
    else if(i%3==0){
        console.log("fizz")
        data.push("fizz")
    }
    else{
        console.log(i)
        data.push(i)
    }
}

console.log(data)

*/
/*
const data = ['rice', 'bean', 'garri', 'eba', 'ewedu', 'ila', 'gbegiri']
for (let i = 0; i < data.length; i++) {
    const element = data[i];
    console.log(element)
    }
*/
/*
const data = ['rice', 'bean', 'garri', 'eba', 'ewedu', 'ila', 'gbegiri']
for (let i = 0; i < data.length; i++) {
    if (data[i]=="eba"){
        console.log(data[i] + " " + "is very delicious")
    }
    else{
        console.log(data[i] + " " + "is good")
    }    
}

item1.innerHTML = data[0] + " " + "is good"
item2.innerHTML = data[1] + " " + "is good"
item3.innerHTML = data[2] + " " + "is good"
item4.innerHTML = data[3] + " " + "is very delicious"
item5.innerHTML = data[4] + " " + "is good"
item6.innerHTML = data[5] + " " + "is good"
*/

const data = ['rice', 'bean', 'garri', 'eba', 'ewedu', 'ila', 'gbegiri']
const grade = {
    'math': 90,
    'phy': 90,
    'chem': 80,
    'bio': 90
}
for(food in data){
    if (data[food]=="eba"){
        console.log(data[food] + " " + "is very delicious")
    }
    else{
        console.log(data[food] + " " + "is good")
    } 
}

for(g in grade){
    console.log(g + " " + grade[g])
}

document.querySelector("#jsdata").innerHTML = data;

let x = 2
while (x < 6) {
    console.log("Hello World!!!")
    x +=1
}

let y = 4
do {
    y = y* 5
    console.log(x)
} 
while (y >2);