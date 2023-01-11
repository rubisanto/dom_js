let nom = document.getElementsByName("name");
let age = document.getElementsByName("age");
let birthdate = document.getElementsByName("birthdate");

// Sélectionne le bouton de soumission du formulaire
let submitButton = document.querySelector("button");

submitButton.addEventListener("click", function (event) {
  let p = document.createElement("p");
  p.id = "result";
  document.body.appendChild(p);

  p.textContent = `name: ${nom[0].value}, age: ${age[0].value}, birthdate: ${birthdate[0].value}`;
});
