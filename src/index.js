// import { run } from "./app/app";
import "./scss/main.scss";
// import { AlertService } from "./app/alert.service";
// import { ComponentService } from "./app/component.service";

// const alertService = new AlertService();
// const componentService = new ComponentService();
// console.log("HI HI");
// run(alertService, componentService);

const dropBtn = document.querySelector(".header__list-dropbtn");
const dropList = document.querySelector(".header__drop-list");

let currentSlider = 0;
const slides = document.querySelectorAll(".brands__slider");
const dots = document.querySelectorAll(".brands__dots-dot");
const slidesArr = [...slides];
const dotsArr = [...dots];
const prev = document.getElementById("prev-btn");
const next = document.getElementById("next-btn");

// console.log(prev);
// console.log(next);
dropBtn.addEventListener("click", (e) => {
  if (dropList.classList.contains("actived")) {
    dropList.classList.remove("actived");
  } else {
    dropList.classList.add("actived");
  }
});

function updateCurrent(currentIndex) {
  slides[currentIndex].className = "brands__slider active";
  dots[currentIndex].className = "brands__dots-dot active";
}

// prev btn
prev.addEventListener("click", () => {
  slides[currentSlider].className = "brands__slider right";
  dots[currentSlider].className = "brands__dots-dot";
  currentSlider = currentSlider - 1;
  if (currentSlider < 0) {
    currentSlider = slides.length - 1;
  }
  updateCurrent(currentSlider);
});
// next btn
next.addEventListener("click", () => {
  slides[currentSlider].className = "brands__slider left";
  dots[currentSlider].className = "brands__dots-dot";
  currentSlider = currentSlider + 1;
  if (currentSlider > slides.length - 1) {
    currentSlider = 0;
  }
  updateCurrent(currentSlider);
});

dotsArr.forEach((el, index) => {
  el.addEventListener("click", () => {
    dotsArr.forEach((el) => (el.className = "brands__dots-dot"));
    slidesArr.forEach((el) => (el.className = "brands__slider"));
    updateCurrent(index);
  });
});

updateCurrent(currentSlider);
