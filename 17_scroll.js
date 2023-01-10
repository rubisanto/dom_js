// Crée un nouvel élément p avec la date actuelle
let initialP = document.createElement("p");
initialP.textContent = new Date().toLocaleString();

// Ajout de l'élément p crée précédemment au body de la page
document.body.appendChild(initialP);

// Fonction pour créer un nouveau paragraphe avec la date et l'heure actuelle
function createParagraph() {
  let p = document.createElement("p");
  p.textContent = new Date().toLocaleString();
  return p;
}

// Ajoute un gestionnaire d'événement de défilement à la fenêtre
window.addEventListener("scroll", function () {
  // Si l'utilisateur a défilé de plus de 50px depuis le dernier p ajouté
  if (window.scrollY > 50) {
    // Ajout d'un nouveau paragraphe avec la date et l'heure actuelle
    document.body.appendChild(createParagraph());
    // Réinitialisation de la position de scrollY pour permettre l'ajout de nouveaux paragraphe
    window.scrollY = 0;
  }
});
