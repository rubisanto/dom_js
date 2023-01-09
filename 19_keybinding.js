// Sélectionne l'élément div avec l'ID "square"
let square = document.querySelector("#square");

// Ajoute un gestionnaire d'événement de touche de clavier à la fenêtre
window.addEventListener("keydown", function (event) {
  // Obtient la position actuelle du carré en utilisant offsetLeft et offsetTop
  let x = square.offsetLeft;
  let y = square.offsetTop;

  // Vérifie la touche appuyée et modifie la position du carré en conséquence
  switch (event.key) {
    case "ArrowUp":
      y -= 10; // Déplace le carré vers le haut de 10px
      break;
    case "ArrowDown":
      y += 10; // Déplace le carré vers le bas de 10px
      break;
    case "ArrowLeft":
      x -= 10; // Déplace le carré vers la gauche de 10px
      break;
    case "ArrowRight":
      x += 10; // Déplace le carré vers la droite de 10px
      break;
  }

  // Définit la nouvelle position du carré en utilisant style.left et style.top
  square.style.left = `${x}px`;
  square.style.top = `${y}px`;
});
