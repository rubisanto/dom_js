$(document).ready(function () {
  function insertHelloWorld() {
    let element = $("<p>").html("Hello World");
    $("body").append(element);
  }

  insertHelloWorld();
});
