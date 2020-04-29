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

dropBtn.addEventListener("click", (e) => {
  if (dropList.classList.contains("actived")) {
    dropList.classList.remove("actived");
  } else {
    dropList.classList.add("actived");
  }

  //   console.log(123);
});

// dropBtn.addEventListener("mouseleave", () => {
//   //   console.log(456);
//   dropList.classList.remove("actived");
// });
