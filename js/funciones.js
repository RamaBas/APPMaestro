var level= 1; // Nivel del juego
var imgXlevel= 4; // Imagenes por nivel
var selectedImage= 'espada'; // Realizar seleccion de imagen al azar

/*Reproductor de sonido de fondo */
$(document).ready(function () {
	var sonido = document.getElementById("sonido");
})

function loadImg(){
	var levelImage= "~/img/nivel"+ level;
	var site= $(ID_del_Div);
	var image= document.createElement("img");
	var imageName= 'espada';
	for (var i=1; i < imgXlevel; i++){ 
		dir= levelImage+imageName+".png";
		image.setAttribute("src", levelImage+imageName);
		image.setAttribute("onclick", "verificar(this)")
		site.appendChild(image);
	}
}

function confirmSalida() {
	var mensaje = confirm("¿Queres salir del juego?");

	if (mensaje) {
		window.locationf="index.html";
		level = 1; //Regresa el nivel a 1
	}

}

/* Verifica que la imagen seleccionada sea la correcta */
function verificar(elem){
	if (elem.data == selectedImage){
		level++;
		return true;
	}
	return false;
}
Esto es un cambio