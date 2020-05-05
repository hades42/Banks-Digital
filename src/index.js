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

// Brand Slider

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

// Slider for Testimonial
let tesCurrentSlider = 0;
// const tesSliders = document.querySelectorAll(".testimonial__slider");
// const tesDots = document.querySelectorAll(".testimonial__dots-dot");
const tesSliderArr = [...document.querySelectorAll(".testimonial__slider")];
const tesDotsArr = [...document.querySelectorAll(".testimonial__dots-dot")];
const tesNext = document.querySelector(".testimonial__next");
const tesPrev = document.querySelector(".testimonial__prev");

// console.log(tesSliderArr);
function updateTesCurr(tesCurrentSlider) {
  tesSliderArr[tesCurrentSlider].className = "testimonial__slider active";
  tesDotsArr[tesCurrentSlider].className = "testimonial__dots-dot active";
}

tesPrev.addEventListener("click", () => {
  tesSliderArr[tesCurrentSlider].className = "testimonial__slider right";
  tesDotsArr[tesCurrentSlider].className = "testimonial__dots-dot";
  tesCurrentSlider = tesCurrentSlider - 1;
  if (tesCurrentSlider < 0) {
    tesCurrentSlider = tesSliderArr.length - 1;
  }
  updateTesCurr(tesCurrentSlider);
});
// next btn
tesNext.addEventListener("click", () => {
  tesSliderArr[tesCurrentSlider].className = "testimonial__slider left";
  tesDotsArr[tesCurrentSlider].className = "testimonial__dots-dot";
  tesCurrentSlider = tesCurrentSlider + 1;
  if (tesCurrentSlider > tesSliderArr.length - 1) {
    tesCurrentSlider = 0;
  }
  updateTesCurr(tesCurrentSlider);
});

tesDotsArr.forEach((el, index) => {
  el.addEventListener("click", () => {
    tesDotsArr.forEach((el) => (el.className = "testimonial__dots-dot"));
    tesSliderArr.forEach((el) => (el.className = "testimonial__slider"));
    updateTesCurr(index);
  });
});

updateTesCurr(currentSlider);

// Popup container
const hamburgerBar = document.querySelector(".header__hamburger");
const popUp = document.querySelector(".popup");
const closePopUp = document.querySelector(".popup__container-close");

hamburgerBar.addEventListener("click", () => {
  popUp.className = "popup active";
});

closePopUp.addEventListener("click", () => {
  popUp.classList.remove("active");
});

// Accordion Scroll Effect
const accordionHeaders = document.querySelectorAll(".footer__headerwrap");

accordionHeaders.forEach((headerItem) => {
  headerItem.addEventListener("click", (e) => {
    if (!headerItem.classList.contains("active")) {
      removeAllActive();
    }
    headerItem.classList.toggle("active");
    headerItem.childNodes[3].classList.toggle("active");

    const body = headerItem.nextElementSibling;
    if (headerItem.classList.contains("active")) {
      body.style.maxHeight = body.scrollHeight + "px";
    } else {
      body.style.maxHeight = 0;
    }
  });
});

// Remove active accordion
function removeAllActive() {
  accordionHeaders.forEach((headerItem) => {
    headerItem.classList.remove("active");
    headerItem.childNodes[3].classList.remove("active");

    const body = headerItem.nextElementSibling;
    body.style.maxHeight = 0;
  });
}
