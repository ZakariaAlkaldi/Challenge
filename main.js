let navbar = document.querySelector(".header .navbar");
let show = document.querySelector(".header .toggle");

show.onclick = function () {
  navbar.classList.toggle("hide");
};
