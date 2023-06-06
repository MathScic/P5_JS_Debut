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



console.log(Precedent);
console.log(Suivant);

/** Event listener flèche droite et gauche **/


Suivant.addEventListener("click", () => {
  console.log("slide suivant");
  document.getElementById("slide").src = "assets/images/slideshow/slide2.jpg";
});

Precedent.addEventListener("click", () => {
  console.log("slide precedent");
  document.getElementById("slide").src = "assets/images/slideshow/slide1.jpg";
});


function ChangeSlide(sens) {
  numero = numero + sens; 
	if (numero > 1)
  numero = 0;
	if (numero < 0)
  numero = 1;
	document.getElementById("slide").src = "assets/images/slideshow/" + slides[1];
}







