// pour le html
// <!-- Champ input pour saisir la tâche -->
// {
/* <input type="text" id="taskInput">
<!-- Bouton pour ajouter la tâche -->
<button id="addTodo">Ajouter</button>
<!-- Liste ul pour afficher les tâches -->
<ul id="todoList"></ul> */
// }

// Sélect

// Sélectionne le champ input et le bouton
let taskInput = document.querySelector("#taskInput");
let addTodoButton = document.querySelector("#addTodo");
// Sélectionne la liste ul
let todoList = document.querySelector("#todoList");

// Ajoute un gestionnaire d'événement de clic au bouton "Ajouter"
addTodoButton.addEventListener("click", function () {
  // Récupère la valeur saisie dans le champ input
  let task = taskInput.value;

  // Vérifie si la valeur saisie n'est pas vide
  if (task) {
    // Crée un nouvel élément li avec la tâche saisie
    let li = document.createElement("li");
    li.textContent = task;

    // Crée un bouton "Supprimer" pour chaque tâche
    let removeButton = document.createElement("button");
    removeButton.textContent = "Supprimer";

    // Ajoute un gestionnaire d'événement de clic au bouton "Supprimer"
    removeButton.addEventListener("click", function () {
      // Supprime l'élément li de la liste
      todoList.removeChild(li);
    });

    // Ajoute le bouton "Supprimer" à l'élément li
    li.appendChild(removeButton);

    // Ajoute l'élément li à la liste ul
    todoList.appendChild(li);

    // Réinitialise le champ input
    taskInput.value = "";
  }
});
