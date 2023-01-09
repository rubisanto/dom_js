const main = () => {
  let element = document.querySelector("#content");

  //   add a "p" element with the text "hello world" as first child of the div with the id "content"
  let p = document.createElement("p");
  p.textContent = "hello world";
  element.prepend(p);
};

main();
