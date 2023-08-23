// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");

  // ambil jarak header atasnya
  const fixedNav = header.offsetTop;

  // jika window scrollnya lebih besar dari jarak header atasnya maka
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
