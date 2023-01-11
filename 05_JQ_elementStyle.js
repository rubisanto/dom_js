const main = () => {
  let element = $("button");
  element.each((index, button) => {
    $(button).css("background-color", "red");
  });
  return element;
};
