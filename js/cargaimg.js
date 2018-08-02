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
                var letra= valor[0];
                var imagen= document.createElement("img");
                imagen.src='../img/niveles/'+valor+'.png';  
<<<<<<< HEAD
                imagen.setAttribute("data-valor", valor);
                imagen.setAttribute("id", valor.substr(-20,1)); //Me guardo como id la primer letra del nombre de la imagen
=======
                imagen.setAttribute("data-valor", letra[0]);
                imagen.setAttribute("id", valor);
>>>>>>> 5364655d06192b5ca91eff4a50c649eebe1a3bec
                imagen.setAttribute("class", 'imgJuegos slideDown');
                imagen.setAttribute("onclick","javascript: enmarcar(event)");
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
    $("#img1").parent().html(obtenerImagenAleatoria('img1'));
    $("#img2").parent().html(obtenerImagenAleatoria('img2'));
    $("#img3").parent().html(obtenerImagenAleatoria('img3'));
    $("#img4").parent().html(obtenerImagenAleatoria('img4'));

});