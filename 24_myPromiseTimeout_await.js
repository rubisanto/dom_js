let button = document.querySelector("button");

// add event listener to button
button.addEventListener("click", async function () {
  // sleep fuction to create a p element in the DOM
  await sleep(2000);
  let p = document.createElement("p");
  p.textContent = "hello world";
  document.body.appendChild(p);
});
