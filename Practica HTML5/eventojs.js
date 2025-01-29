//eventos 1

var x= new Array(3); 

function tipoflor(){

	alert("flor");
}

function datipoflor(){

	//document.getElementsByTagName("img")[0].onclick=tipoflor;
	for(var i=0;i<4;i++){
		x[i]=document.getElementsByTagName("img")[i];


	}
	/*x.addEventListener("click",tipoflor,false);//activa un evento("como",funcion,boolean)
	x.addEventListener("mouseover",crecer,false);
	x.addEventListener("mouseout",decrecer,false);
*/
	
	x[0].addEventListener("mouseover",function(){x.width=225;x.height=300;},false);
	x[0].addEventListener("mouseout",function(){x.width=200;x.height=200;},false);
	x[0].addEventListener("click",tipoflor,false);//activa un evento("como",funcion,boolean)
	//boolean es para elementos anidados 

}


/*

function crecer(){
 
}

function decrecer(){
	
}*/
window.addEventListener("load",datipoflor,false);
//window.onload=datipoflor;