//javascript

function hola() {
	alert("cargando pagina(estas en la funcion hola)");
}

function ejecuta(){
	
	
	//document.querySelector(".importante").onclick=hola;// buscar la primera etiqueta de css que tenga ese nombre para applicar la funcion 
	//document.querySelector("#principal p:last-child").onclick=hola;//este buscara la etiqueta correspondiente, luego buscara el elemento dentro de esa etiqueta y :el ultimo hijo
	var x = document.querySelectorAll("#principal p, span");

	for (var i=0; i<x.length; i++) {
		
		x[i].onclick=hola;
	}
}

window.onload=ejecuta;