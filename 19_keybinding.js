let square = document.querySelector("#square");

window.addEventListener("keydown", function (event) {
  let x = square.offsetLeft;
  let y = square.offsetTop;

  switch (event.key) {
    case "ArrowUp":
      y -= 10;
      break;
    case "ArrowDown":
      y += 10;
      break;
    case "ArrowLeft":
      x -= 10;
      break;
    case "ArrowRight":
      x += 10;
      break;
  }

  square.style.left = `${x}px`;
  square.style.top = `${y}px`;
});
