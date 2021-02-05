"use strict";

const input = document.querySelector(".input--1");
const button = document.querySelector(".button__1");

button.addEventListener("click", function (e) {
  document
    .getElementById("section--1")
    .insertAdjacentHTML("beforeend", `<p>${input.value}</p>`);
});
