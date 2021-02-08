"use strict";

const input1 = document.querySelector(".input--1");
const input2 = document.querySelector(".input--2");
const input3 = document.querySelector(".input--3");
const btn1 = document.querySelector(".button__1");
const section1El = document.getElementById("section--1");
const btn2 = document.querySelector(".button__2");
const btn3 = document.querySelector(".button__3");
const label = document.querySelector("label");

let html;

class User {
  constructor(name, address, email) {
    this.name = name;
    this.address = address;
    this.email = email;
  }
}

class App {
  #users = [];
  constructor() {
    console.log("uusi appi käynnistyy");
    /////////////////////////////// event listeners
    btn1.addEventListener("click", this.addNewUser.bind(this));

    btn2.addEventListener("click", function () {
      inputsAll.forEach((input) => {
        //if (!input.value) return;
        section1El.removeChild(document.querySelector(".span"));
      });
    });

    btn3.addEventListener("click", this.funcNumAbdDisplayUsers.bind(this));
  }

  funcNumAbdDisplayUsers() {
    let value = +label.textContent;
    value += 1;
    label.textContent = value;
    console.log(this.#users);
    console.log(this);
  }

  addNewUser() {
    const name = input1.value;
    const address = input2.value;
    const email = input3.value;

    const user = new User(name, address, email);

    this.#users.push(user);

    input1.value = input2.value = input3.value = "";
  }
}

const app = new App();
