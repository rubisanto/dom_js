import { sleepThrow } from "./25_myPromiseTimeoutFailed.js";

let success = document.querySelector("#success");
let fail = document.querySelector("#fail");

// add event listener to button
success.addEventListener("click", function () {
  // with then and catch add a p element to the DOM
  sleepThrow(2000)
    .then(function () {
      let p = document.createElement("p");
      p.textContent = "hello world";
      document.body.appendChild(p);
    })
    .catch(function (error) {
      console.log(error);
    });
});

// add event listener to button
fail.addEventListener("click", function () {
  // with then and catch add a p element to the DOM
  sleepThrow(1000)
    .then(function () {
      let p = document.createElement("p");
      p.textContent = "hello world";
      document.body.appendChild(p);
    })
    .catch(function (error) {
      console.log(error);
    });
});
