const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



// Affichage des bullet points

const classDot = document.querySelector('.dots');
for (var i = 0; i < slides.length; i ++) {
	const dot = document.createElement("div");
	classDot.appendChild(dot);
	dot.classList.add("dot");
	dot.innerHTML = "";
	
	if (i == 0) {
		dot.classList.add("dot_selected");
	}
}
var selectedDot = document.querySelector('.dot_selected');



// Ajout des évènements sur les flèches

const arrowRight = document.querySelector('.arrow_right');
const arrowLeft = document.querySelector('.arrow_left');


arrowRight.addEventListener('click', function() {
	const nextDot = document.querySelector(".dot_selected").nextElementSibling;
	selectedDot.classList.remove("dot_selected");
	nextDot.classList.add("dot_selected");
});
arrowLeft.addEventListener('click', function() {
	console.log("Clic sur bouton gauche");
});