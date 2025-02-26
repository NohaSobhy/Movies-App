// let landingPage = document.querySelector(".home");

// let imageArray = ["home1.jpg" , "home2.jpg" , "home3.jpg"];

// landingPage.style.backgroundImage = 'url("img/home1.jpg)';


// let randomNumber = Math.floor(Math.random() * imageArray.length );


// let randomOption = true;


// function randomizeImgs(){
//   if( randomOption === true){
//     setInterval(() => {

//       let randomNumber = Math.floor(Math.random() * imageArray.length );
    
//       landingPage.style.backgroundImage = 'url("img/'+  imageArray[randomNumber] +'")';
    
//     }, 4000);
    
//   }
// }
// randomizeImgs();

// let nav = document.querySelector("nav");
// let menuIcon = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");




// menuIcon.onclick = () => {
//   navbar.classList.toggle("active");
// }
// window.onscroll = () => {
//   navbar.classList.remove("active");
// }
// window.addEventListener('scroll', () => {
//     nav.classList.toggle("shadow" , window.scrollY > 0);
// });
const menuIcon = document.querySelector(".navbar-toggler");
const navbar = document.querySelector(".navbar");
const navCollapse = document.querySelector(".navbar-collapse");

// Toggle menu on click (mobile)
menuIcon.onclick = () => {
  navbar.classList.toggle("active");
};

// Close menu when scrolling
window.onscroll = () => {
  navbar.classList.remove("active");
  navCollapse.classList.remove("show");
};

// Add background and shadow when scrolling
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled", "shadow");
  } else {
    navbar.classList.remove("scrolled", "shadow");
  }
});




