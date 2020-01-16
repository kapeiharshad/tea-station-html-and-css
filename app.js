/** @format */

const nav_btn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const nav_close = document.getElementById("nav-close");

nav_btn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});
nav_close.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
