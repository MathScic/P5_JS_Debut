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
const txt = document.querySelector("#banner p")


dots.innerHTML += '<div class="dot dot_selected"></div>'
for (let i = 1; i<slides.length; i++) {
  dots.innerHTML += '<div class="dot"></div>';
}

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
    ".dot");     /** On déclare la const 'dot_selected' en selectionnant la class '.dot' **/
  numero += sens;
  if (numero > slides.length - 1) {   /**length = longueur chaine de caractere**/
    numero = 0;
  } else if (numero == -1) {
    numero = slides.length - 1;
  }

  resetTxt(slides[numero].tagLine)

  document.getElementById("slide").src =
    "assets/images/slideshow/" + slides[numero].image;

  dotSelected.forEach((dot) => {
    /** Création boucle forEach **/

     dot.classList.remove(
      "dot_selected"
    ); 
  });

  dotSelected[numero].classList.add(
    "dot_selected"
  ); /** Ajout de la classe 'dot_selected au DOM **/
  
  console.log(dotSelected);
}

function resetTxt(texte) {   /** Création fonction changement de phrase selon photo **/
  txt.innerHTML = texte
}



