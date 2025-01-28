//Modules de transformation HEX to HSL varations
import { hexToHslArray, changeShadowColor } from "./modules/utils.js";
import convert from "color-convert";
import Color from "./modules/color.js";

//Selector
const input = document.querySelector("input");
const main = document.querySelector("main");

//Connexion avec le input de l'utilisateur
input.addEventListener("keypress", (e) => {
  //Vérifie que l'utiliser a appuyer sur la touche enter
  if (e.key === "Enter") {
    e.preventDefault(); // Empêche le rechargement de la page
    //Vérifier que la valeur du input est bien une valeur hexadécimal
    if (/^#[0-9A-F]{6}$/i.test(input.value)) {
      const palette = hexToHslArray(input.value); //Appel la fonction qui va générer la palette HSL
      displayColors(palette); //Appel la fonction display colors pour l'affichage
    } else {
      console.log(`${input.value} n'est pas une valeur hexadécimal`);
    }
  }
});

//Fonction pour copier
main.addEventListener("click", async (e) => {
  if (e.target.tagName === "DIV" && e.target.classList.value === "color") {
     await navigator.clipboard.writeText(e.target.dataset.color); //Ceci nous retourne une promesse donc asynchrone donc utilisation async/await
  }
});

//Fonction qui affiche les couleurs et qui addapte le visuel
function displayColors(palette) {
  main.replaceChildren();
  palette.forEach((hslcolor) => {
    const color = new Color(hslcolor);
    color.display(main);
  });

  //Définis les couleur pour le dégradé
  const gradientColor = `#${convert.hsl.hex(palette[0])}, #${convert.hsl.hex(
    palette[4]
  )}, #${convert.hsl.hex(palette[9])}`;
  // Transforme le dégradé avec les couleurs
  document.body.style.background = `linear-gradient(-45deg, ${gradientColor})`;
  // Redéfini background-size
  document.body.style.backgroundSize = `400% 400%`;

  //Appelle la fonction pour changer l'ombre
  changeShadowColor(input.value);
}
