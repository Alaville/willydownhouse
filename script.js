"use strict";

// const input1 = document.querySelector(".input--1");
// const input2 = document.querySelector(".input--2");
// const input3 = document.querySelector(".input--3");
// const btn1 = document.querySelector(".button__1");
// const section1El = document.getElementById("section--1");
// const btn2 = document.querySelector(".button__2");
// const btn3 = document.querySelector(".button__3");
// const label = document.querySelector("label");

const btnsAll = document.querySelectorAll(".button");
let ones = 0;
let twos = 0;
let threes = 0;
const randNums = [];

const newRandomNum = function () {
  const random = Math.trunc(Math.random() * 3) + 1;
  return random;
};

const btnPress = function (btn) {
  let isPressed = false;

  btn.addEventListener("click", function (e) {
    e.preventDefault();

    if (isPressed) return;

    //random num
    let randomNum = newRandomNum();
    randNums.push(randomNum);

    // max two times same random number

    // arvotut numerot

    console.log(randNums);
    console.log(e.target);
    console.log(randomNum);

    e.target.src = `muisti${randomNum}.jpg`;
    isPressed = true;
  });
};

btnsAll.forEach((btn) => {
  btnPress(btn);
});

const arr1 = [3, "a", "a", "a", [2, 3, "a", [3, "a"], 2, 4], 9, 3];
const array1 = [1, 0, 2, 3, 4];
const array2 = [3, 5, 6, 7, 8];
// Expected Output :
// [4, 5, 8, 10, 12, 13]

const sumTwoArraysBasedOnIndex = function (ar1, ar2) {
  const final = [];
  if (ar1.length === ar2.length) {
    ar1.forEach((el, i) => {
      final.push(el + ar2[i]);
    });
  }
  return final;
};

console.log(sumTwoArraysBasedOnIndex(array1, array2));

const removeNullishValues = function (arr) {
  const final = [];
  arr.forEach((value) => {
    if (Boolean(value) === true) {
      final.push(value);
    }
  });
  return final;
};

console.log(
  removeNullishValues([
    NaN,
    0,
    15,
    false,
    -22,
    "",
    "dssdfsdf",
    undefined,
    47,
    null,
  ])
);

//console.log(arr.slice(-2));

/* btnsAll.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    let ones = 0;
    let twos = 0;
    let threes = 0;

    const randomNum = Math.trunc(Math.random() * 3) + 1;
    console.log(randomNum);

    if (randomNum === 1 && ones < 2) {
      ones++;
      e.target.src = `muisti1.jpg`;
    }
    if (randomNum === 2 && twos < 2) {
      twos++;
      e.target.src = `muisti2.jpg`;
    }
    if (randomNum === 3 && threes < 2) {
      threes++;
      e.target.src = `muisti3.jpg`;
    }

    console.log(e.target);

    // const img = e.target.children[0];
    // console.log(img);

    // e.target.children[0].src = "muisti1.jpg";
  });
});
 */
