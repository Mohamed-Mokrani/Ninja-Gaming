// Header scroll
let header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 1);
});

// Header image opacity
let links = document.querySelectorAll("button");
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
const imageDiv = document.querySelectorAll(".image-game");
const game = document.querySelectorAll(".game");
const options = document.querySelectorAll(".options");
for (let i = 0; i < game.length; i++) {
  game[i].addEventListener("mouseenter", function () {
    imageDiv[i].style.filter = "none";
    imageDiv[i].style.width = "400px";
    imageDiv[i].style.height = "240px";
    game[i].style.height = "260px";
    options[i].style.gap = "30px";
    game[i].style.fontSize = "30px";
    imageDiv[i].style.borderRadius = "0px";
  });

  game[i].addEventListener("mouseleave", function () {
    imageDiv[i].style.filter = "grayscale(100%)";
    imageDiv[i].style.width = "300px";
    imageDiv[i].style.height = "170px";
    game[i].style.height = "200px";
    options[i].style.gap = "10px";
    game[i].style.fontSize = "20px";
    imageDiv[i].style.borderRadius = "50px";
  });
}
// Home link

const sectionGames = document.querySelector(".section-one-games");
const sectionHomeId = document.querySelector("#home-id");

// function changeBodyHome(url) {
//   fetch(url)
//     .then((response) => response.text())
//     .then((data) => {
//       let parser = new DOMParser();
//       let doc = parser.parseFromString(data, "text/html");

//       sectionHomeId.innerHTML = sectionHomeId.innerHTML;

//     });
// }

// document.querySelector("#nlogout").addEventListener("click", function () {
//   changeLogin("login.html");
// });

// Game link

function changeBodyGames(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      let parser = new DOMParser();
      let doc = parser.parseFromString(data, "text/html");
      let sectionOneGames = doc.querySelector(".section-one-games");
      sectionHomeId.innerHTML = sectionOneGames.innerHTML;
      sectionHomeId.className = "section-one-games";
      const imageDiv = document.querySelectorAll(".image-game");
      const game = document.querySelectorAll(".game");
      const options = document.querySelectorAll(".options");
      for (let i = 0; i < game.length; i++) {
        game[i].addEventListener("mouseenter", function () {
          imageDiv[i].style.filter = "none";
          imageDiv[i].style.width = "400px";
          imageDiv[i].style.height = "240px";
          game[i].style.height = "260px";
          options[i].style.gap = "30px";
          game[i].style.fontSize = "30px";
          imageDiv[i].style.borderRadius = "0px";
        });

        game[i].addEventListener("mouseleave", function () {
          imageDiv[i].style.filter = "grayscale(100%)";
          imageDiv[i].style.width = "300px";
          imageDiv[i].style.height = "170px";
          game[i].style.height = "200px";
          options[i].style.gap = "10px";
          game[i].style.fontSize = "20px";
          imageDiv[i].style.borderRadius = "50px";
        });
      }
    });
}
document.querySelector("#ninja-games").addEventListener("click", function () {
  changeBodyGames("games.html");
});
