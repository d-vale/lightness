//Import de la librairire color-convert
import convert from "color-convert";

// Fonction qui va transformer la valeur hex en un tableau avec des variations de luminosité HSL
export function hexToHslArray(hex) {
  const arrayHsl = [];
  //Conversion du HEX en HSL
  const hsl = convert.hex.hsl(hex);

  for (let i = 0; i <= 100; i += 10) {
    const hslCopy = [...hsl]; //Créer une copie pour ne pas avoir la même référence que le tableau de base
    hslCopy[2] = i; //Changement de la valeur de luminosité
    arrayHsl.push(hslCopy);
  }
  return arrayHsl;
}

// Fonction qui va changer la couleur de l'ombre
export function changeShadowColor(hex) {
  const hsl = convert.hex.hsl(hex);
  const hslForStyle = `${hsl[0]}deg ${hsl[1]}% ${hsl[2]}%`;

  document.documentElement.style.setProperty("--shadow-color", hslForStyle);
}
