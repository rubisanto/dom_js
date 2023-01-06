function idSelector() {
  //select the element input with the id "input"
  let element = document.querySelector("#input");
  //return the content of the element
  return element.textContent;
}

module.exports = idSelector;
