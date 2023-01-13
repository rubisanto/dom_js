//déplacer le carré de 10px dans la direction donné par les touches du clavier (haut bas gauche droite)

let square = document.querySelector("div#square");

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      square.style.top = parseInt(square.style.top) - 10 + "px";
      break;
    case "ArrowDown":
      square.style.top = parseInt(square.style.top) + 10 + "px";
      break;
    case "ArrowLeft":
      square.style.left = parseInt(square.style.left) - 10 + "px";
      break;
    case "ArrowRight":
      square.style.left = parseInt(square.style.left) + 10 + "px";
      break;
  }
});
