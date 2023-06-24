const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav-toggle");

toggle.addEventListener("click", () => {
  nav.classList.toggle("show-menu");
});

// /remove menu bar/

const navLink = document.querySelectorAll(".nav-link");
function linkAction() {
  nav.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// change active link color

const linkColor = document.querySelectorAll(".nav-link");
function colorLink() {
  if (colorLink) {
    linkColor.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  }
}
linkColor.forEach((u) => u.addEventListener("click", colorLink));

// swiper script for home

var swiper = new Swiper(".home-container", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//  scroll to top button

const up = document.querySelector(".up");
window.addEventListener("scroll", () => {
  up.classList.toggle("show", window.scrollY >= 560);
  up.onclick = () => {
    window.scrollTo({ behavior: "smooth", top: "0" });
  };
});
