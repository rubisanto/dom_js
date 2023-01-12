let button = document.querySelector("button");

// add event listener to button
button.addEventListener("click", function () {
  //   sleepThrow() function throws an error with newPromise((resolve, reject) => {reject("error")}) without then
  //   or await
  function sleepThrow(ms) {
    return new Promise((resolve) => {
      setTimeout(function () {
        if (ms === 2000) {
          resolve();
        } else {
          reject("error");
        }
      }, ms);
    });
  }
});
