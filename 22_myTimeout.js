// identifie button element
let button = document.querySelector("button");

// add event listener to button
button.addEventListener("click", function () {
  // setTimeout function to create a p element in the dom
  setTimeout(function () {
    let p = document.createElement("p");
    p.textContent = "hello world";
    document.body.appendChild(p);
  }, 2000);
});
