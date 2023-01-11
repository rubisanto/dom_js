// Sélectionne le formulaire
let form = document.querySelector("#fontsize");

// Sélectionne les éléments possédant la classe "controlled_fontsize"
let elements = document.querySelectorAll(".controlled_fontsize");

form.addEventListener("input", function (event) {
  [...elements].map((element) => (element.style.fontSize = form.value + "px"));
});
