let button = document.querySelector("button");

button.addEventListener("click", async () => {
  await sleep(2000); // attend 2 secondes
  const p = document.createElement("p");
  p.textContent = "Element ajouté après 2 secondes";
  document.body.appendChild(p);
});

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
