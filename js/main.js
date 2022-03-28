/*
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
*/
let Username = ""
let Password = ""
function collectData(){
  Username = document.getElementById("username").value
  Password = document.getElementById("password").value
  console.log(Username)
  console.log(Password)

  const userData = {
    "username": Username,
    "password": Password
  }

  console.log(userData)
  document.getElementById("username").value = ""
  document.getElementById("password").value = ""
}


for (let i = 0; i < 7; i++) {
  console.log("The number is " + i )
}

