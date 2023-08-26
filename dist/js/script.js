// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// klik diluar hamburger
window.addEventListener("click", function (e) {
  // jika yang ditarget bukan hamburger dan navmenu, maka
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// navbar fixed
window.onscroll = function () {
  const toTop = document.querySelector("#to-top");
  const header = document.querySelector("header");

  // ambil jarak header pada ujung atas halamannya
  // defaultnya jika berada dipaling atas maka jarak atasnya nol, tapi semakin di scroll maka semakin bertambah jarak atas halamannya.
  const fixedNav = header.offsetTop;

  // jika window scrollnya lebih besar dari jarak header atasnya maka
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    // back to top tombol
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    // back to top tombol
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Darkmode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    // melakukan penyimpanan local storage agar saat direfresh browser maka mode dark akan tetap tampil jika sedang dimode dark
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    // melakukan penyimpanan local storage agar saat direfresh browser maka tema light akan tetap tampil jika sedang dimode light
    localStorage.theme = "light";
  }
});

// pindahkan posisi toggle sesuai mode bila direfresh oleh browser
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  // lakukan dark jika toggle true/ jika checkbox true
  darkToggle.checked = true;
} else {
  // lakukan light jika toggle false/ jika checkbox false
  darkToggle.checked = false;
}
