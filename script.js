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
