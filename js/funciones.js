

function confirmSalida() {
	var mensaje = confirm("¿Queres salir del juego?");

	if (mensaje) {
		window.locationf="index.html";
	}

}

/*Verifica que la imagen seleccionada sea la correcta */
function verificar(){

}



function hacerzoom(){
	imagen = document.getElementById("imagen1");
	imagen.setAttributte("class","estilozoom");

}