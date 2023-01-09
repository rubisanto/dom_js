const main = () => {
  let buttons = document.querySelectorAll("button");
  buttons.forEach(function (button) {
    if (button.classList.contains("danger")) {
      button.style.backgroundColor = "red";
    } else if (button.classList.contains("warning")) {
      button.style.backgroundColor = "yellow";
    } else if (button.classList.contains("secondary")) {
      button.style.backgroundColor = "grey";
    } else {
      button.style.backgroundColor = "blue";
    }
  });
};

main();
