() => {
  // change background color of the buttons with each div
  let blue = document.querySelectorAll(".btn");

  let grey = document.querySelector(".secondary");
  let yellow = document.querySelector(".warning");
  let red = document.querySelector(".danger");

  blue.forEach((button) => {
    button.style.backgroundColor = "blue";
  });
  grey.style.backgroundColor = "grey";
  yellow.style.backgroundColor = "yellow";
  red.style.backgroundColor = "red";
};
