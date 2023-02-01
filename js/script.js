"use strict";

const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const menu = document.querySelector(".nav-container");
const navLinks = document.querySelectorAll(".nav-link");
const navOpenState = "nav-open";

openMenuBtn.addEventListener("click", function (e) {
  menu.classList.add(navOpenState);
});

closeMenuBtn.addEventListener("click", function () {
  menu.classList.remove(navOpenState);
});

navLinks.forEach((x) => {
  x.addEventListener("click", () => {
    menu.classList.remove(navOpenState);
  });
});
