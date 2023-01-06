function childrenAccess() {
  // find the first li element of the ul list with the id "menu"
  let element = document.querySelector("#menu li");

  return element;
}

module.exports = childrenAccess;
