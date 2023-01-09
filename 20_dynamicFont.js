// Sélectionne le formulaire
let form = document.querySelector("form");

// Sélectionne le champ de formulaire "fontsize"
let fontSizeField = form.querySelector("#fontsize");

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
