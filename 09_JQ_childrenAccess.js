function childrenAccess() {
  var menu = $("#menu");
  var firstItem = menu.children().first();
  var content = firstItem.text();
  return content;
}
