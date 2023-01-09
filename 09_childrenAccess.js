function childrenAccess() {
  var menu = document.getElementById("menu");
  var firstItem = menu.children[0];
  var content = firstItem.textContent;
  return content;
}

module.exports = childrenAccess;
