// Sélectionne le formulaire
let form = document.querySelector("form");

// créer le champ de formulaire de type nombre avec comme id "fontsize"
let fontSizeField = document.createElement("input");
fontSizeField.type = "number";
fontSizeField.id = "fontsize";
// l'ajouter au formulaire
form.appendChild(fontSizeField);

// Sélectionne les éléments possédant la classe "controlled_fontsize"
let elements = document.querySelectorAll(".controlled_fontsize");

// Ajoute un gestionnaire d'événement de changement au champ "fontsize"
fontSizeField.addEventListener("change", function () {
  // Récupère la valeur du champ "fontsize"
  let fontSize = this.value;

  // Applique la valeur du champ comme fontSize aux éléments sélectionnés
  elements.forEach(function (element) {
    element.style.fontSize = `${fontSize}px`;
  });
});
