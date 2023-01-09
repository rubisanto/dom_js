const main = () => {
  //remove all the p element
  let element = document.querySelectorAll("p");
  element.forEach((p) => {
    p.remove();
  });
  return element;
};

main();
