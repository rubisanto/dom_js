// Sélectionne l'élément p#hoverme
let hoverElement = document.querySelector("#hoverme");

// Ajoute un gestionnaire d'événement de survol à l'élément p
hoverElement.addEventListener("mouseover", function () {
  // Crée un nouvel élément p avec l'ID "result" et le texte "hovered"
  let resultElement = document.createElement("p");
  resultElement.id = "result";
  resultElement.textContent = "hovered";

  // Sélectionne l'élément div.content
  let content = document.querySelector("div.content");

  // Ajoute l'élément p comme enfant de div.content
  content.appendChild(resultElement);
});
