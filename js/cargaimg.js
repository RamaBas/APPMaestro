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
                imagen.setAttribute("data-valor", valor);
                imagen.setAttribute("id", valor.substr(-20,1)); //Me guardo como id la primer letra del nombre de la imagen
                imagen.setAttribute("class", 'imgJuegos slideDown');
                imagen.setAttribute("onclick","javascript: enmarcar(event)");
                imagen.setAttribute("data-enuso","no"); //para controlar mas adelante que no se repita la misma imagen
                imagenes[indice] =  imagen;
            });
    }
    function obtenerImagenAleatoria(val) {
        var indice = Math.floor(Math.random() * imagenes.length); //obtengo un indice aleatorio
        var imgRandom = imagenes[indice]; //imagen que obtuve

        img = $(imgRandom).data("enuso");

        while(img != "no"){
            indice = Math.floor(Math.random() * imagenes.length);
            imgRandom = imagenes[indice]; //imagen que obtuve   
        }
        if (img == "no"){
            //cambio data-enuso en "si" para que no se use mas la misma imagen
            $(img).data("enuso","si");
            imgRandom.setAttribute("data-enuso","si");
            return imgRandom;
        }

    }
    cargarImagenes();
    $("#img1").parent().html(obtenerImagenAleatoria('img1'));
    $("#img2").parent().html(obtenerImagenAleatoria('img2'));
    $("#img3").parent().html(obtenerImagenAleatoria('img3'));
    $("#img4").parent().html(obtenerImagenAleatoria('img4'));

});