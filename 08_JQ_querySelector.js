const main = () => {
  let buttons = $("button");
  buttons.filter(".danger").css("background-color", "red");
  buttons.filter(".warning").css("background-color", "yellow");
  buttons.filter(".secondary").css("background-color", "grey");
  buttons
    .filter(":not(.danger, .warning, .secondary)")
    .css("background-color", "blue");
};
