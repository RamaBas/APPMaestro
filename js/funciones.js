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


function borrar(id) {var elem = document.getElementById(id); return elem.parentNode.removeChild(elem);}

function msj(titulo, contenido, idioma) {
    var padre = document.createElement('div');
    padre.id = 'modal';
    document.body.appendChild(padre);
    var bc = idioma ? idioma : 'Aceptar';
    var ModalData = document.getElementById("modal");
    var boton = "";
    ModalData.innerHTML = '<div id="modal-back"></div><div class="modal"><div id="modal-c"><h3>'+titulo+'</h3><span id="mc">'+contenido+'</span><div id="buttons"><a id="mclose" href="#">'+bc+'</a>'+boton+'</div></div></div>';
    document.querySelector(".modal").style.height = document.getElementById("mc").offsetHeight+100 + 'px';
    document.getElementById('mclose').onclick=function(){ borrar('modal'); };
    document.getElementById('modal-back').onclick=function(){ borrar('modal'); }
}







function confirmSalida() {
    var mensaje = confirm("¿Queres salir del juego?");
    if (mensaje) {
        window.location.href = '../index.html';
    }
}


/*Selecciona con color una imagen elegida, y comprueba que 
no haya otra seleccionada, en ese caso, la despinta, y pinta la nueva */
function enmarcar(event) {
    selec = event.target;
    if (pintado == false) {
        selec.className += " zoom";
        pintado = true;
        letraSelec = selec.id;
    } else {
        $('.zoom').removeClass("zoom");
        selec.className += " zoom";
        letraSelec = selec.id;
    }
}



/****************************Juego 1 ****************************************+*/
/* Verifica que la imagen seleccionada sea la correcta */
function comprobar() {
    pintado = false;
    $('.zoom').removeClass("zoom"); //la imagen seleccionada se despinta

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
    }
    else {
        if(letraSelec == "p"){
            msj('--------------- Muy bien !  -------------', 'Buen trabajo ! ', 'Cerrar');

            setTimeout(function(){
            window.location.href = 'n2j2.html'; //Pasa al siguiente juego
            },999);
          
        }
        else{
            msj('--------------- Te equivocaste!  -------------', 'Segui intentando, vas muy bien!', 'Cerrar');
       }
    }
}

//Juego 2

function comprobar3() {
    pintado = false;
    $('.zoom').removeClass("zoom"); //la imagen seleccionada se despinta

    if (letraSelec == "m") {
        alert("Buen trabajo!!");
        if (letraActual == "m") {
            cambiarTit();
            letraActual = "e";
        } else {
            level++;
            window.location.href = 'n2j3.html';
        }
    } else {
        alert("Ups, te equivocaste! Volve a intentarlo.");
    }

}

//Nivel 1
//Juego 3
function enmarcar1(event){
    selec = event.target;
    console.log(selec);
    if(letra1 == 'zzz'){
        letra1 = selec.dataset.letra;
        selec.className += " zoom";
        letrarepetida = selec.id;
    }else {
        if(selec.id != letrarepetida) {
            if(letra2 == 'zzz'){
                letra2 = selec.dataset.letra;
                selec.className += " zoom";
                pintado = true;
            }else{
                alert("Comprueba las imagenes");
            }
        }else{
            if(pintado == true){
                alert("Comprueba las imagenes");
            }else{
                alert("Selecciona otra");
            }
        }
    }
}

function comprobar4() {
    if(pintado == true){
        $('.zoom').removeClass("zoom");
        if(letra1 == letra2){
            alert("Buen trabajo!!");
            pintado = false;
            letra1 = 'zzz';
            letra2 = 'zzz';
        }else {
            alert("Prueba con otra palabra");
            pintado = false;
            letra1 = 'zzz';
            letra2 = 'zzz';
        }
    }else {
        alert("Selecciona 2 imagenes");
    }
    
}


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





function startArtyom() {
    artyom.initialize({
        lang: "es-ES",
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

