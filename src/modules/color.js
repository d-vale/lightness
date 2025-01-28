import convert from "color-convert";

class Color {
  #hsl;
  #hex;
  #element;
  constructor(hslArray) {
    this.#hsl = hslArray;
    this.#hex = `#${convert.hsl.hex(hslArray)}`;
    this.#element = this.#generateElement();
  }

  #generateElement() {
    const div = document.createElement("div");
    div.style.backgroundColor = this.#hex;
    div.classList.add("color");
    div.dataset.color = this.#hex;

    const p = document.createElement("p");
    p.style.color = this.#hsl[2] <= 60 ? "#ffffff" : "#000000";
    p.textContent = this.#hex;

    div.appendChild(p);

    return div;
  }

  display(parentElement) {
    parentElement.appendChild(this.#element);

    const header = document.querySelector("header");
    header.classList.add("minimized");
  }
}

export default Color;
