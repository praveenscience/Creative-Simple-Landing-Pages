const container = document.getElementById("container");
const currentYear = document.getElementById("current-year");
const toggleBtn = document.getElementById("responsive-menu");
const scrollDownBtns = document.querySelectorAll(".scrolldown");

const setCurrentYear = () => {
  currentYear.textContent = `${new Date().getFullYear()}`;
};

const toggleMenu = () => {
  document.querySelector(".menu").classList.toggle("close");
  document.querySelector(".hide").classList.toggle("show");
};

const scrollToElement = (event, element) => {
  event.preventDefault();
  element.scrollIntoView({
    behavior: "smooth"
  });
};

document.addEventListener("DOMContentLoaded", (e) => {
  scrollDownBtns.forEach(btn => {
    btn.addEventListener("click", (event) => scrollToElement(event, container));
  });
  toggleBtn.addEventListener("click", toggleMenu);
  setCurrentYear();
});