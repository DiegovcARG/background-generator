var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randombutton = document.getElementById("randombutton");

setGradient();

function setRandomcolors() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

function getRandomColor() {
	var length = 6;
	var chars = '0123456789ABCDEF';
	var hex = '#';
	while(length--) hex += chars[(Math.random() * 16) | 0];
	return hex;
  }

console.log(color1.value);
console.log(color2.value);


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randombutton.addEventListener("click", setRandomcolors);

setRandomcolors();
