// Crée un bouton avec l'ID "toggle"
let button = document.createElement("button");
button.id = "toggle";

// Sélectionne l'élément div#modal
let modal = document.querySelector("div#modal");

// Ajoute un gestionnaire d'événement de clic au bouton
button.addEventListener("click", function () {
  // Ajoute ou retire la classe "is-open" de l'élément div#modal
  modal.classList.toggle("is-open");
});
