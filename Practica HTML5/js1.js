//javascript

function hola() {
	alert("cargando pagina(estas en la funcion hola)");
}

function ejecuta(){
	//document.getElementsByTagName("p")[2].onclick=hola; //esto lo que hace es activar la funcion en el parrafo corespondiente
	//document.getElementById('idscript').onclick=hola;
	//var z=document.getElementByClassName("nombre de la clase ")[n].onclick=hola;// este es para obtener el array atraves de clases
	// tiene que ir igualado a una variable 
	for (var i=0 ; i<3; i++) {
		document.getElementsByTagName("p")[i].onclick=hola;
	}
}

window.onload=ejecuta; //hace que se active la funcion en lo que carga la pagina