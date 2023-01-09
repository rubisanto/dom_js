// Sélectionne l'élément p#hoverme
let p = document.querySelector("p#hoverme");

// Ajoute un gestionnaire d'événement de survol à l'élément p
p.addEventListener("mouseover", function () {
  // Crée un nouvel élément p avec l'ID "result" et le texte "hovered"
  let p = document.createElement("p");
  p.id = "result";
  p.textContent = "hovered";

  // Sélectionne l'élément div.content
  let content = document.querySelector("div.content");

  // Ajoute l'élément p comme enfant de div.content
  content.appendChild(p);
});
