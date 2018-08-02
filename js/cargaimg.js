$(function() {
    imagenes=[];
    var nombres = [
        'ala',
        'anana',
        'anillo',
        'anteojos',
        'araña',
        'arbol',
        'aro',
        'auto',
        'elefante',
        'empanadas',
        'escoba',
        'escuela',
        'espada',
        'espejo',
        'estante',
        'estrella',
        'iglesia',
        'iman',
        'indio',
        'isla',
        'mano',
        'martillo',
        'muñeca',
        'ojo',
        'ojota',
        'ola',
        'olla',
        'oreja',
        'oso',
        'oveja',
        'uña',
        'uno',
        'utiles',
        'uva'
    ];

    function cargarImagenes(){  
            //Hacer que el array contenga imagenes con los atributos que necesite y el data 
            nombres.forEach(function(valor,indice){ 
                var imagen= document.createElement("img");
                imagen.src='../img/niveles/'+valor+'.png';  
                imagen.setAttribute("data-valor", valor);
                imagen.setAttribute("id", valor);
                imagenes[indice] =  imagen;
            });
    }
    function obtenerImagenAleatoria(val) {
        var indice = Math.floor(Math.random() * imagenes.length);
        var imgRandom = imagenes[indice];
        var i = 0;
        var repetidas= [];

        //Para que no se repitan las mismas imagenes
        while (i < imagenes.length && imgRandom == imagenes[i]) {
            indice = Math.floor(Math.random() * imagenes.length);
            imgRandom = imagenes[indice];
            i++;
        }
        if (imgRandom != repetidas[i]) {
            repetidas.push(i);
            //Agrego la imagen al arreglo de imagenes para guardarla y que no se repita 
        }

        var imagen = document.getElementById(val);

        return imgRandom;
    }
    cargarImagenes();
    $("#img1").attr('src', obtenerImagenAleatoria('img1'));
    $('.imagen2').attr('src', obtenerImagenAleatoria('img2'));
    $('.imagen3').attr('src', obtenerImagenAleatoria('img3'));
    $('.imagen4').attr('src', obtenerImagenAleatoria('img4'));

});