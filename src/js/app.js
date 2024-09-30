// let slides = document.getElementsByClassName("my-slides");
// let navlinks = document.getElementsByClassName("dot");
// const sliderPrevBtn = document.querySelector(".slider-prev");
// const sliderNextBtn = document.querySelector(".slider-next");
// let currentSlide = 0;

// sliderPrevBtn.addEventListener("click", () => {
//   changeSlide(currentSlide + 1);
// });

// sliderNextBtn.addEventListener("click", () => {
//   changeSlide(currentSlide - 1);
// });

// function changeSlide(moveTo) {
//   if (moveTo > slides.length) {moveTo = 0}
//   if (moveTo < 0) {moveTo = slides.length - 1;}
//     slides[currentSlide].classList.toggle("actived-slider")
//     navlinks[currentSlide].classList.toggle("actived-slider");
//     slides[moveTo].classList.toggle("actived-slider");
//     navlinks[moveTo].classList.toggle("actived-slider");

//     currentSlide = moveTo;
// }

// document.querySelectorAll(".dot").forEach((bullet, bulletIndex) => {
//   bullet.addEventListener('click', () => {
//       if (currentSlide !== bulletIndex) {
//           changeSlide(bulletIndex);
//       }
//   })
// })

// let slides = document.getElementsByClassName("slider__slide");
// let navlinks = document.getElementsByClassName("slider__navlink");
// let currentSlide = 0;

// document.getElementById("nav-button--next").addEventListener("click", () => {
//   changeSlide(currentSlide + 1);
// });
// document.getElementById("nav-button--prev").addEventListener("click", () => {
//   changeSlide(currentSlide - 1);
// });

// function changeSlide(moveTo) {
//   if (moveTo >= slides.length) {
//     moveTo = 0;
//   }
//   if (moveTo < 0) {
//     moveTo = slides.length - 1;
//   }

//   slides[currentSlide].classList.toggle("active");
//   navlinks[currentSlide].classList.toggle("active");
//   slides[moveTo].classList.toggle("active");
//   navlinks[moveTo].classList.toggle("active");

//   currentSlide = moveTo;
// }

// document.querySelectorAll(".slider__navlink").forEach((bullet, bulletIndex) => {
//   bullet.addEventListener("click", () => {
//     if (currentSlide !== bulletIndex) {
//       changeSlide(bulletIndex);
//     }
//   });
// });
// Log to console

import { mainCategories } from "./dom-loader.js";
import { app } from "./dom-loader.js";

function router(params) {
  const routes = [
    { path: "/", view: () => console.log("home-page") },
    { path: "/roles", view: () => console.log("branches-page") },
    { path: "/login", view: () => console.log("login-page") },
  ];

  const potentialRoutes = routes.map((item) => {
    return {
      route: item,
      isMatch: location.pathname === item.path,
    };
  });

  let match = potentialRoutes.find((item) => item.isMatch);

  if (!match) {
    match = {
      route: { path: "/not-found", view: () => console.log("not-found page") },
      isMatch: true,
    };
  }

  console.log(match.route.view());
}

function navigateTo(url) {
    history.pushState(null, null, url);
    router();
}

app.addEventListener("DOMContentLoaded", () => {
  app.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
