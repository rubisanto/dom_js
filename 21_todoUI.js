// Récupère les éléments de la page
let input = document.querySelector("input[type='text']");
let addButton = document.querySelector("#addTodo");
let todoList = document.querySelector("ul");

// Ajoute un gestionnaire d'événement sur le bouton d'ajout
addButton.addEventListener("click", function () {
  // Récupère la valeur saisie dans le champ de saisie
  let task = input.value;

  // Crée un nouvel élément de liste
  let newTodo = document.createElement("li");
  newTodo.textContent = task;

  // Crée un bouton de suppression
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Supprimer";

  // Ajoute un gestionnaire d'événement de clic sur le bouton de suppression
  deleteButton.addEventListener("click", function () {
    newTodo.remove();
  });

  // Ajoute le bouton de suppression à l'élément de liste
  newTodo.appendChild(deleteButton);

  // Ajoute l'élément de liste à la liste ul existante
  todoList.appendChild(newTodo);

  // Réinitialise le champ de saisie
  input.valuetodoInput.value = "";
});

// Ajoute un gestionnaire d'événement de clic à chaque bouton "Supprimer"
todoList.addEventListener("click", function (event) {
  if (event.target.matches("button")) {
    // Supprime le li parent de l'élément ciblé (bouton)
    event.target.parentNode.remove();
  }
});
