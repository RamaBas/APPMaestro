<<<<<<< HEAD
=======
var pintado = false; // En el juego , si se selecciona una imagen esta var se pone en true
var letraSelec = null;
var level = 1; // Nivel del juego
var letraActual = "u";
var selec;

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
                imagen.setAttribute("id", valor.substr(-20,1)); //Me guardo como id la primer letra del nombre de la imagen
                imagen.setAttribute("class", 'imgJuegos slideDown');
                imagen.setAttribute("onclick","javascript: enmarcar(event)");
                //imagen.setAttribute("data-enuso","no"); //para controlar mas adelante que no se repita la misma imagen
                imagenes[indice] =  imagen;
            });
    }
    function obtenerImagenAleatoria(val) {
        var indice = Math.floor(Math.random() * imagenes.length); //obtengo un indice aleatorio
        var imgRandom = imagenes[indice]; //imagen que obtuve
     

       /* img = $(imgRandom).data("enuso");

        while(img != "no"){
            indice = Math.floor(Math.random() * imagenes.length);
            imgRandom = imagenes[indice]; //imagen que obtuve   
        }
        if (img == "no"){
            //cambio data-enuso en "si" para que no se use mas la misma imagen
            $(img).data("enuso","si");
            imgRandom.setAttribute("data-enuso","si");
            if(imgXlevel == 0) {
                imgXlevel = 4;
                imagenes = [];
                nombres.forEach(function() {
                    img.setAttribute("data-enuso","no");
                })
            } else{
                imgXlevel = imgXlevel-1;
            }*/
            return imgRandom;

    }

>>>>>>> a7757550ade4c093d63e745cf0d0c8780f3d13bd

var cantImgE = 0;
var cantImgI = 0; //nivel 1 juego 3

function ingresar(val){
    var sndSelec = new Audio("sonidos/selec.wav");
    sndSelec.play();
    setTimeout(function(){
    window.location.href=val;
}, 300);}



function borrar(id) { var elem = document.getElementById(id); return elem.parentNode.removeChild(elem); }
/* ATENCION!!! NO eliminar la funcion msj porque hay algunos juegos que la siguen usando*/
function msj(titulo, contenido, idioma) {
    var padre = document.createElement('div');
    padre.id = 'modal';
    document.body.appendChild(padre);
    var bc = idioma ? idioma : 'Aceptar';
    var ModalData = document.getElementById("modal");
    var boton = "";
    ModalData.innerHTML = '<div id="modal-back"></div><div class="modal"><div id="modal-c"><h3>' + titulo + '</h3><span id="mc">' + contenido + '</span><div id="buttons"><a id="mclose" href="#">' + bc + '</a>' + boton + '</div></div></div>';
    document.querySelector(".modal").style.height = document.getElementById("mc").offsetHeight + 100 + 'px';
    document.getElementById('mclose').onclick = function() { borrar('modal'); };
    document.getElementById('modal-back').onclick = function() { borrar('modal'); }
} 

function confirmSalida() {
    var sndSelec = new Audio("../sonidos/selec.wav");
    sndSelec.play();
    alertify.success("<img src='../img/tinisaliendo.png'> Saliendo del juego... ");
    setTimeout(function() {
                window.location.href = '../index.html';
            }, 1300);
}




<<<<<<< HEAD
//Nivel 1
//Juego 3
function enmarcar1(event) {
    imgSelec = event.target;
     if (pintado == false) {
        imgSelec.className += " cambiarBorde";
        pintado = true;
    } else {
        $('.cambiarBorde').removeClass("cambiarBorde");
        imgSelec.className += " cambiarBorde";
    }
    if(imgSelec.className.indexOf("I") == 10){
        letraSelec = "i";
        cantImgI++;
=======
    if (letraSelec == letraActual) {
        level++;
        msj('--------------- Buen trabajo  -------------', 'Vas muy bien. Sigue asi!', 'Cerrar')
        window.location.href = 'n1j'+level+'.html';
        }
    else {
        msj('--------------- Te equivocaste!  -------------', 'Segui intentando, vas muy bien!', 'Cerrar');
    }
}


/********************Juego 2********************** */



/********************* NIVEL 2 ******************************/

// Juego 1

function guardarValor() {
    $(".ui-widget-content").click(function( event ){
        selec = event.target;
        letraSelec = selec.dataset.valor;
    })
}

function comprobar2(){
    if (letraSelec == "f") { //primer actividad del juego
        msj('--------------- Muy bien !  -------------', 'Elegiste la opcion correcta, buen trabajo!', 'Cerrar');
        letraSelec = "p"; //
        $('.ocultar').removeClass("ocultar"); //oculta la primer actividad
        $("#mostrar").addClass("ocultar"); //muestra la 2da actividad
>>>>>>> a7757550ade4c093d63e745cf0d0c8780f3d13bd
    }
    else {
        letraSelec = "e";
        cantImgE++;
    }
}

function comprobar4() {
//aca debe comprobarse si es correcto
    console.log(cantImgI);
    if (cantImgE == 2 && cantImgI == 2){
        
    }
    /*
        msj('--------------- Buen trabajo  -------------', 'Vas muy bien. Sigue asi!', 'Cerrar');
        window.location.href = '../html/n1j4.html';
    else {
        msj('--------------- Te equivocaste!  -------------', 'Segui intentando, vas muy bien!', 'Cerrar');
    } */
}


<<<<<<< HEAD
=======
function config(){
  
    var val = $("#valor").val(); //valor del seleccion de la letra
    var imagenesActuales = [];
    imagenesActuales= $('div.imgactuales').children('img');

    if(val == "1"){
    	document.getElementById("letra").innerHTML = "Estoy pensando en algo que empiece con A";
        letraActual= 'a'; 
        cargarImagenes();
            $(imagenesActuales[0]).parent().html(obtenerImagenAleatoria('img1'));
            $(imagenesActuales[1]).parent().html(obtenerImagenAleatoria('img2'));
            $(imagenesActuales[2]).parent().html(obtenerImagenAleatoria('img3'));
            $(imagenesActuales[3]).parent().html(obtenerImagenAleatoria('img4'));
            $("#imgsonido").attr("id","imgletraa");   
    }
    else if (val == "2"){
    		document.getElementById("letra").innerHTML = "Estoy pensando en algo que empiece con O";
            letraActual= 'o'; 
            cargarImagenes();
            $(imagenesActuales[0]).parent().html(obtenerImagenAleatoria('img1'));
            $(imagenesActuales[1]).parent().html(obtenerImagenAleatoria('img2'));
            $(imagenesActuales[2]).parent().html(obtenerImagenAleatoria('img3'));
            $(imagenesActuales[3]).parent().html(obtenerImagenAleatoria('img4'));
          
    }
    else if (val == "3"){
    		document.getElementById("letra").innerHTML = "Estoy pensando en algo que empiece con U";
            letraActual= 'u'; 
            cargarImagenes();
            $(imagenesActuales[0]).parent().html(obtenerImagenAleatoria('img1'));
            $(imagenesActuales[1]).parent().html(obtenerImagenAleatoria('img2'));
            $(imagenesActuales[2]).parent().html(obtenerImagenAleatoria('img3'));
            $(imagenesActuales[3]).parent().html(obtenerImagenAleatoria('img4'));
          
    }
    
         

    
   
}
>>>>>>> a7757550ade4c093d63e745cf0d0c8780f3d13bd


/* Mejorar...
function reproducirSonido(letra){
    id="#"+letra;
    dato=$(id).data("valor");
    $(id).click(function(){
        artyom.say(dato);
    });
};*/



function startArtyom() {
    artyom.initialize({
        lang: "es-ES",
<<<<<<< HEAD
        continuous: false, // Reconoce 1 solo comando y para de escuchar
        listen: true, // Iniciar !
        debug: true, // Muestra un informe en la consola
        speed: 1 // Habla normalmente
    });

    //Reproduce el sonido de la imagen

    datoA = $("#a").data("valor");
    datoE = $("#e").data("valor");
    datoI = $("#i").data("valor");
    datoM = $("#m").data("valor");
    datoO = $("#o").data("valor");
    datoU = $("#u").data("valor");
    datoP = $("#p").data("valor");
    datoS = $("#s").data("valor");

    $("#a").click(function() {
        artyom.say(datoA)
    });

    $('#e').click(function() {
        artyom.say(datoE)
    });

    $('#i').click(function() {
        artyom.say(datoI)
    });

    $('#m').click(function() {
        artyom.say(datoM)
    });

    $('#o').click(function() {
        artyom.say(datoO)
    });

    $('#u').click(function() {
        artyom.say(datoU)
    });

    $('#p').click(function() {
        artyom.say(datoP)
    });
  $('#s').click(function() {
        artyom.say(datoS)
    });
    /* Nivel 1 juego 2 */

    $('#imgsonidon1j2').click(function(){
        artyom.say("Ayuda a Tini a elegir los dibujos que comienzan con la letra O")
    });



    /* Nivel 1 juego 3 */
    $('#arrastrable1').click(function() {
        artyom.say("indio")
    });

    $('#arrastrable2').click(function() {
        artyom.say("estrella")
    });

    $('#arrastrable3').click(function() {
        artyom.say("escoba")
    });

    $('#arrastrable4').click(function() {
        artyom.say("isla")
    });

      $('#imgsonido').click(function(){
        console.log($('#letra').text());
        artyom.say($('#letra').text());
    });

      /*Nivel 1 juego 5*/
      $('#a3').click(function() {
        artyom.say("Ananá")
    });
      $('#i1').click(function() {
        artyom.say("Iman")
    });
      $('#a2').click(function() {
        artyom.say("Ala")
    });
      $('#e1').click(function() {
        artyom.say("Empanadas")
    });
      $('#e2').click(function() {
        artyom.say("Espejo")
    });
      $('#a1').click(function() {
        artyom.say("Anteojos")
    });
      $('#i2').click(function() {
        artyom.say("Indio")
    });

      /*Nivel 1 juego 6*/
      $('#a4').click(function() {
        artyom.say("Ala")
    });
      $('#o1').click(function() {
        artyom.say("Oreja")
    });
      $('#o2').click(function() {
        artyom.say("Ojo")
    });
      $('#a5').click(function() {
        artyom.say("Anillo")
    });
      $('#o3').click(function() {
        artyom.say("Oreja")
    });
      $('#a6').click(function() {
        artyom.say("Arania")
    });
      $('#o4').click(function() {
        artyom.say("Olla")
    });
      $('#a7').click(function() {
        artyom.say("Aro")
    });

      /*Nivel 1 juego 3 */
       $('#i4').click(function() {
        artyom.say("Iglesia")
    });
        $('#e4').click(function() {
        artyom.say("Elefante")
    });
        $('#e5').click(function() {
        artyom.say("Escoba")
    });
        $('#i5').click(function() {
        artyom.say("Indio")
    });
        $('#i6').click(function() {
        artyom.say("Isla")
    });
        $('#e6').click(function() {
        artyom.say("Escuela")
    });
        $('#i7').click(function() {
        artyom.say("Iman")
    });
        $('#e7').click(function() {
        artyom.say("Estante")
    });
        $('#Tini').click(function() {
        artyom.say("Necesito las imagenes que empiezan con la letra E")
    });
$('#Flopi').click(function() {
        artyom.say("Necesito las imagenes que empiezan con la letra I")
    });

=======
         continuous: false, // Reconoce 1 solo comando y para de escuchar
         listen: true, // Iniciar !
         debug: true, // Muestra un informe en la consola
         speed: 1 // Habla normalmente
            });

    //Reproduce el sonido de la imagen

    cargarImagenes();
    $("#img1").parent().html(obtenerImagenAleatoria('img1'));
    $("#img2").parent().html(obtenerImagenAleatoria('img2'));
    $("#img3").parent().html(obtenerImagenAleatoria('img3'));
    $("#img4").parent().html(obtenerImagenAleatoria('img4'));

   

        datoA = $("#a").data("valor");
        datoE = $("#e").data("valor");
        datoI = $("#i").data("valor");
        datoM = $("#m").data("valor");
        datoO = $("#o").data("valor");
        datoU = $("#u").data("valor");

        $("#a").click(function() {
            artyom.say(datoA)
        });

        $('#e').click(function() {
            artyom.say(datoE)
        });
        
        $('#i').click(function() {
            artyom.say(datoI)
        });
    
        $('#m').click(function() {
            artyom.say(datoM)
        });
        
        $('#o').click(function() {
            artyom.say(datoO)
        });
       
        $('#u').click(function() {
            artyom.say(datoU)
        });
}
>>>>>>> a7757550ade4c093d63e745cf0d0c8780f3d13bd

