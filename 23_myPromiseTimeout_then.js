let button = document.querySelector("button");

// create a function that returns a promise
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

button.addEventListener("click", () => {
  // sleep fuction to create a p element in the DOM
  sleep(2000).then(() => {
    let p = document.createElement("p");
    p.textContent = "hello world";
    document.body.appendChild(p);
  });
});
