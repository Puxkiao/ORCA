// SAMUEL MAROJAHAN SIANIPAR

// 10122438

// IF-12

// toggle class active
const navbarNav = document.querySelector(".navlink-nav");
// ketika navigasi mennu di klik
document.querySelector("#navigasi-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar burger jadi balik ke asal

const hamburger = document.querySelector("#navigasi-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
