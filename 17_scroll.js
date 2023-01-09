// Crée un nouvel élément p avec la date actuelle
function createParagraph() {
  let p = document.createElement("p");
  p.textContent = new Date().toLocaleString();
  return p;
}

// Ajoute un gestionnaire d'événement de défilement à la fenêtre
window.addEventListener("scroll", function () {
  // Si l'utilisateur a atteint le bas de la page, ajoute un nouvel élément p au DOM
  if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
    document.body.appendChild(createParagraph());
  }
});
