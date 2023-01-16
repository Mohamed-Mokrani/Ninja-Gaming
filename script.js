// Header scroll
let header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 1);
  document.querySelectorAll(".header.vids").style.display = "none";
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
  function gamesStyleOn() {
    imageDiv[i].style.filter = "none";
    imageDiv[i].style.width = "400px";
    imageDiv[i].style.height = "240px";
    game[i].style.height = "260px";
    options[i].style.gap = "30px";
    game[i].style.fontSize = "30px";
    imageDiv[i].style.borderRadius = "0px";
  }

  function gamesStyleOff() {
    imageDiv[i].style.filter = "grayscale(100%)";
    imageDiv[i].style.width = "300px";
    imageDiv[i].style.height = "170px";
    game[i].style.height = "200px";
    options[i].style.gap = "10px";
    game[i].style.fontSize = "20px";
    imageDiv[i].style.borderRadius = "50px";
  }
  game[i].addEventListener("mouseenter", gamesStyleOn);
  game[i].addEventListener("mouseleave", gamesStyleOff);
}
const sectionHomeId = document.querySelector("#home-id");

// Login link
function loginButton() {
  document.querySelector("#logout").style.display = "flex";
  document.querySelector("#logout").style.alignItems = "center";
  document.querySelector("#my-profile").style.display = "flex";
  document.querySelector("#my-profile").style.alignItems = "center";
  document.querySelector("#home-btn").style.display = "none";
  document.querySelector("#ninja-games").style.display = "flex";
  fetch("profile.html")
    .then((response) => response.text())
    .then((data) => {
      let parser = new DOMParser();
      let htmlDoc = parser.parseFromString(data, "text/html");
      let sectionProfile = htmlDoc.getElementsByClassName("section-profile")[0];
      document.getElementById("home-id").innerHTML = sectionProfile.innerHTML;
      sectionHomeId.className = "section-profile";
    });
}

// login page link
function login() {
  fetch("login.html")
    .then((response) => response.text())
    .then((data) => {
      let parser = new DOMParser();
      let htmlDoc = parser.parseFromString(data, "text/html");
      let loginBody = htmlDoc.getElementsByClassName("login-body")[0];
      document.getElementById("home-id").innerHTML = loginBody.innerHTML;
      sectionHomeId.className = "login-body";
      document
        .querySelector("#login-button")
        .addEventListener("click", loginButton);
    });
    document.querySelector("#home-btn").style.display="flex";
}

document.getElementById("login-button").addEventListener("click", login);

// Home link
document.getElementById("home-btn").addEventListener("click", function () {
  fetch("home.html")
    .then((response) => response.text())
    .then((data) => {
      let parser = new DOMParser();
      let htmlDoc = parser.parseFromString(data, "text/html");
      let sectionHome = htmlDoc.getElementsByClassName("section-home")[0];
      document.getElementById("home-id").innerHTML = sectionHome.innerHTML;
      sectionHomeId.className = "home-body";
      document.getElementById("login-button").addEventListener("click", login);
    });
});
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
        function gamesStyleOn() {
          imageDiv[i].style.filter = "none";
          imageDiv[i].style.width = "400px";
          imageDiv[i].style.height = "240px";
          game[i].style.height = "260px";
          options[i].style.gap = "30px";
          game[i].style.fontSize = "30px";
          imageDiv[i].style.borderRadius = "0px";
        }

        function gamesStyleOff() {
          imageDiv[i].style.filter = "grayscale(100%)";
          imageDiv[i].style.width = "300px";
          imageDiv[i].style.height = "170px";
          game[i].style.height = "200px";
          options[i].style.gap = "10px";
          game[i].style.fontSize = "20px";
          imageDiv[i].style.borderRadius = "50px";
        }
        game[i].addEventListener("mouseenter", gamesStyleOn);
        game[i].addEventListener("mouseleave", gamesStyleOff);
      }
    });
}

document.querySelector("#ninja-games").addEventListener("click", function () {
  changeBodyGames("games.html");
});
// Profile button
document.getElementById("my-profile").addEventListener("click", function () {
  fetch("profile.html")
    .then((response) => response.text())
    .then((data) => {
      let parser = new DOMParser();
      let htmlDoc = parser.parseFromString(data, "text/html");
      let sectionProfile = htmlDoc.getElementsByClassName("section-profile")[0];
      document.getElementById("home-id").innerHTML = sectionProfile.innerHTML;
      sectionHomeId.className = "section-profile";
    });
});

// Logout button

document.querySelector("#logout").addEventListener("click", function () {
  document.querySelector("#logout").style.display = "none";
  document.querySelector("#my-profile").style.display = "none";
  document.querySelector("#ninja-games").style.display = "none";
  document.querySelector("#home-btn").style.display = "flex";
});
document.getElementById("logout").addEventListener("click", login);
