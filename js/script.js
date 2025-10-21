const profession = "Mulia Subing";
const elementtyping = document.querySelector(".typing");
let index = 0;

function typeeffect() {
  if (index < profession.length) {
    elementtyping.textContent += profession.charAt(index);
    index++;
    setTimeout(typeeffect, 100);
  }
}
typeeffect();