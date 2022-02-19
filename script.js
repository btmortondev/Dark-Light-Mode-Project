"use strict";
let lightMode = true;

document.querySelector(".btn-theme").addEventListener("click", function () {
  if (lightMode) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    lightMode = false;
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightMode = true;
  }
});

document
  .querySelector(".btn-theme-dark")
  .addEventListener("click", function () {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  });

document
  .querySelector(".btn-theme-light")
  .addEventListener("click", function () {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  });

document
  .querySelector(".btn-theme-milkshake")
  .addEventListener("click", function () {
    document.documentElement.setAttribute("data-theme", "milkshake");
    localStorage.setItem("theme", "milkshake");
  });
