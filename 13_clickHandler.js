// Sélectionne l'élément button#clickme
let button = document.querySelector("button#clickme");

// Ajoute un gestionnaire d'événement de clic à l'élément button
button.addEventListener("click", function () {
  // Crée un nouvel élément p avec l'ID "result" et le texte "clicked"
  let p = document.createElement("p");
  p.id = "result";
  p.textContent = "clicked";

  // Sélectionne l'élément div.content
  let content = document.querySelector("div.content");

  // Ajoute l'élément p comme enfant de div.content
  content.appendChild(p);
});
