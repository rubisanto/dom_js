function classSelector() {
  // the 3rd element in the document with the class "x-wing"
  let element = document.querySelectorAll(".x-wing")[2];
  //return the text content of the element
  return element.textContent;
}

module.exports = classSelector;
