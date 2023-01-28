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

for (let i = 0; i < slides.length; i ++) {
	const dot = document.createElement("div");
	classDot.appendChild(dot);
	dot.classList.add("dot");
	dot.innerHTML = "";
	// On affiche le premier point comme étant sélectionné par défaut à l'ouverture de la page
	if (i == 0) {
		dot.classList.add("dot_selected");
	}
}

// Récupération de la position du bullet point sélectionné
let position = 1;
let selectedDot = recuperationPosition(position);



// Ajout des évènements sur les flèches

const arrowRight = document.querySelector('.arrow_right');
const arrowLeft = document.querySelector('.arrow_left');


arrowRight.addEventListener('click', function() {
	changementBulletPoint(1);
});
arrowLeft.addEventListener('click', function() {
	changementBulletPoint(-1);
});



// FONCTIONS

function recuperationPosition(position){
	return document.querySelector(`.dots .dot:nth-child(${position}`);
}

function changementBulletPoint(direction) {
	selectedDot.classList.remove("dot_selected");
	position = position + direction;
	selectedDot = recuperationPosition(position);
	selectedDot.classList.add("dot_selected");
}