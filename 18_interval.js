// Crée une chaîne de caractères avec la date et l'heure actuelles au format "jj/mm/aaaa hh:mm:ss"
function getDateTime() {
  let now = new Date();
  let date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
  let time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  return `${date} ${time}`;
}

// Sélectionne l'élément p avec l'ID "clock"
let clock = document.querySelector("#clock");

// Met à jour la date et l'heure toutes les secondes
setInterval(function () {
  clock.textContent = getDateTime();
}, 1000);
