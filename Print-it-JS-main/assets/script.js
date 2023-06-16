const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let numero = 0;
console.log(numero);

const Suivant = document.querySelector(".arrow_left");
const Precedent = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
const dotSelected =
document.querySelectorAll(
  ".dot");/** On déclare la const 'dot_selected' en selectionnant la class '.dot' **/

slides.forEach(function (dot) {
  /** Création boucle dans le tableau 'slides' **/

  dots.innerHTML += '<div class="dot"></div>';
  /** On a insérer la <div class = "dot"> dans la balise "dots" dans notre DOM **/
});

console.log(Precedent);
console.log(Suivant);

/** Event listener flèche droite et gauche **/
Suivant.addEventListener("click", () => {
  console.log("slide suivant");
  ChangeSlide(1);
});

Precedent.addEventListener("click", () => {
  console.log("slide precedent");
  ChangeSlide(-1);
});

function ChangeSlide(sens) {
  const dotSelected =
  document.querySelectorAll(
    ".dot");
  numero += sens;
  if (numero > slides.length - 1) {
    numero = 0;
  } else if (numero == -1) {
    numero = slides.length - 1;
  }

  document.getElementById("slide").src =
    "assets/images/slideshow/" + slides[numero].image;

  dotSelected.forEach((dot) => {
    /** Création boucle forEach **/

    dotSelected.classList.remove(
      "dot_selected"
    ); /** suppression des class 'dot' remplacer par 'dot_selected **/
  });
  dotSelected[numero].classList.add(
    "dot_selected"
  ); /** Ajout de la classe 'dot_selected au DOM **/

  console.log(dotSelected);
}
