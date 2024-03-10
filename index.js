let monInput = document.getElementById("monInput");
let button = document.getElementById("btn1");

button.addEventListener("click", () => {
  let link = monInput.value;

  if (link.length === 150) {
    let miniLink = link.slice(0, 84);
    let finalLink = miniLink.slice(69);
    let test = "https://m.media-amazon.com/images/I/";
    let result = test + finalLink;

    // Ouvrir une nouvelle fenêtre avec le contenu de la variable result
    window.open(result, "_blank");
  } else if (link.length === 152) {
    let bigLink = link.slice(0, 86);
    let finalLink = bigLink.slice(69);
    let test = "https://m.media-amazon.com/images/I/";
    let result = test + finalLink;

    // Ouvrir une nouvelle fenêtre avec le contenu de la variable result
    window.open(result, "_blank");
  }
});
