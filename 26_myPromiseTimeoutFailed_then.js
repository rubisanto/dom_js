import { sleepThrow } from "./25_myPromiseTimeoutFailed.js";

let successButton = document.getElementById("success");
let failButton = document.getElementById("fail");

successButton.addEventListener("click", function () {
  sleep(3000)
    .then(() => {
      let success = document.createElement("p");
      success.classList.add("success");
      success.innerHTML = "Request succeeded";
      document.body.appendChild(success);
    })
    .catch((error) => {
      console.error(error);
    });
});

failButton.addEventListener("click", function () {
  sleepThrow(3000)
    .then(() => {
      let success = document.createElement("p");
      success.classList.add("success");
      success.innerHTML = "Request succeeded";
      document.body.appendChild(success);
    })
    .catch((error) => {
      let fail = document.createElement("p");
      fail.classList.add("error");
      fail.innerHTML = "Request failed";
      document.body.appendChild(fail);
    });
});
