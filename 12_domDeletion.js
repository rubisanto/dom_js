const main = () => {
  let paragraphs = document.querySelectorAll("p");
  paragraphs.forEach(function (paragraph) {
    paragraph.remove();
  });
};

main();
