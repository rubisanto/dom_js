() => {
  let element = document.querySelectorAll("button");
  //   changer la couleur de tous les boutons
  element.forEach((button) => {
    button.style.color = "red";
  });
  return element;
};
