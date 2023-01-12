let button = document.querySelector("button");

// create a function that returns a promise
function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}

button.addEventListener("click", function () {
  // sleep fuction to create a p element in the DOM
  sleep(2000).then(function () {
    let p = document.createElement("p");
    p.textContent = "hello world";
    document.body.appendChild(p);
  });
});
