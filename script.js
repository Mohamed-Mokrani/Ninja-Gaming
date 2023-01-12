// Header scroll
let header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 1);
});

// Header image opacity
let links = document.getElementsByTagName("a");
let image = document.getElementById("header-image");

function increaseOpacity() {
  image.style.opacity = 1;
}

function decreaseOpacity() {
  image.style.opacity = 0.5;
}

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseenter", increaseOpacity);
  links[i].addEventListener("mouseleave", decreaseOpacity);
}

// games
const imageDiv = document.getElementsByClassName("image-game");
const game = document.getElementsByClassName("game");
for (let i=0; i<game.length ; i++){
game[i].addEventListener("mouseenter", function() {
  imageDiv[i].style.filter = "none";
  imageDiv[i].style.width= "320px";
  imageDiv[i].style.height= "190px";
  
});

game[i].addEventListener("mouseleave", function() {
  imageDiv[i].style.filter = "grayscale(100%)";
  imageDiv[i].style.width= "300px"
  imageDiv[i].style.height= "170px";
});
}