// Sélectionne le formulaire
let form = document.querySelector("form");

// Sélectionne le bouton de soumission du formulaire
let submitButton = form.querySelector("button[type='submit']");

// Ajoute un gestionnaire d'événement de clic au bouton
submitButton.addEventListener("click", function (event) {
  // Empêche le formulaire de soumettre les données
  event.preventDefault();

  // Sélectionne tous les champs de formulaire (input et button)
  let fields = form.querySelectorAll("input, button");

  // Crée une balise p avec l'ID "result"
  let p = document.querySelector("#result");

  // Pour chaque champ de formulaire, ajoute le nom et la valeur à la balise p
  fields.forEach(function (field) {
    p.textContent += `${field.name}: ${field.value}, `;
  });

  // Ajoute la balise p au formulaire
  form.appendChild(p);
});
