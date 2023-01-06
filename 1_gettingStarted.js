function insertHelloWorld() {
  let element = document.createElement("p");
  element.innerHTML = "Hello World";
  document.body.appendChild(element);
}

insertHelloWorld();

module.exports = insertHelloWorld;
