let successButton = document.getElementById("success");
let failButton = document.getElementById("fail");

successButton.addEventListener("click", (e) => {
  sleepThrow(3000, true)
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

failButton.addEventListener("click", () => {
  sleepThrow(3000, false)
    .then(() => {
      let fail = document.createElement("p");
      fail.classList.add("error");
      fail.innerHTML = "Request failed";
      document.body.appendChild(fail);
    })
    .catch((error) => {
      console.error(error);
    });
});
