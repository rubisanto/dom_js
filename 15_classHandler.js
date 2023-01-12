// Sélectioner un bouton avec l'ID "toggle"
let button = document.querySelector("#toggle");

// Sélectionne l'élément div#modal
let modal = document.querySelector("#modal");

// Ajoute un gestionnaire d'événement de clic au bouton
button.addEventListener("click", () => {
  // Ajoute ou retire la classe "is-open" de l'élément div#modal
  modal.classList.toggle("is-open");
});
