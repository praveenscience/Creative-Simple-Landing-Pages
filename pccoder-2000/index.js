//Scroll To Top
const scrollToTop = document.querySelector(".scrollToTop");
//When Scroll Height is greater than 400 then display scroll to top.
window.addEventListener("scroll", () => {
  window.pageYOffset > 400
    ? (scrollToTop.style.display = "block")
    : (scrollToTop.style.display = "none");
});

// Scroll to top on click
scrollToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});

// Maintaining the responsive navbar state.
let navBarState = false;
const navbarToggle = document.querySelector(".responsive-toggle");

navbarToggle.addEventListener("click", () => {
  const navlinks = document.querySelector(".links");
  if (navBarState) {
    navlinks.style.top = "-40rem";
    navBarState = false;
  } else {
    navlinks.style.top = "-4rem";
    navBarState = true;
  }
});

// When click on any link on the responsive navbar close the responsive navbar
const navLinks = document.querySelectorAll("#nav-link");
//Adding the event listeners to all the links on the responsive navbar
navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    const navlinks = document.querySelector(".links");
    navlinks.style.top = "-40rem";
    navBarState = false;
  })
);

// Scroll Reveal Animations
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});