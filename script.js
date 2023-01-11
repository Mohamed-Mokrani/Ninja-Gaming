
// Header scroll
let header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 1);
});


// Header image opacity
let links = document.getElementsByTagName('a');
let image = document.getElementById('header-image');

function increaseOpacity() {
  image.style.opacity = 1;
}

function decreaseOpacity() {
  image.style.opacity = 0.5;
}

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('mouseenter', increaseOpacity);
  links[i].addEventListener('mouseleave', decreaseOpacity);
}