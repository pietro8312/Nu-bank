const minX = -550; // limite à esquerda (negativo)
const maxX = 0;  // limite à direita (positivo)


var lastX;
var posiX;
var currentX = 0;
var div = document.querySelector("div");
var i = document.querySelector("i");
var section = document.querySelector("section")
var drag = false

div.addEventListener("mousedown", function(event){
	lastX = event.pageX
	drag = true
	div.style.cursor = "grabbing";
	event.preventDefault();
});

div.addEventListener("mousemove", function(event){
	if(!drag) return;

	const dist = event.pageX - lastX
	currentX += dist;

	// Limita o valor entre minX e maxX
	currentX = Math.max(minX, Math.min(currentX, maxX));

	section.style.transform = `translateX(${currentX}px)`;
	lastX = event.pageX		
});

div.addEventListener("mouseup", function(){
	drag = false
	div.style.cursor = "unset";
});
