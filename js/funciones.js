var pintado = false; // En el juego , si se selecciona una imagen esta var se pone en true
var letraSelec = null;
var level = 1; // Nivel del juego
var imgXlevel = 4; // Imagenes por nivel
var selectedImage = 'espada'; // Realizar seleccion de imagen al azar
var letraActual = "u";
var selec;
var letra1 = 'zzz';
var letra2 = 'zzz';
var letrarepetida;

function loadImg() {
    var levelImage = "~/img/nivel" + level;
    var site = $(ID_del_Div);
    var image = document.createElement("img");
    var imageName = 'espada';
    for (var i = 1; i < imgXlevel; i++) {
        dir = levelImage + imageName + ".png";
        image.setAttribute("src", levelImage + imageName);
        image.setAttribute("onclick", "verificar(this)")
        image.setAttribute("class", "slideDown");
        image.setAttribute("class", "imgJuegos");
        site.appendChild(image);
    }
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
        letraSelec = selec.dataset.valor;
    } else {
        $('.zoom').removeClass("zoom");
        selec.className += " zoom";
        letraSelec = selec.dataset.valor;
    }
}



/****************************Juego 1 ****************************************+*/
/* Verifica que la imagen seleccionada sea la correcta */
function comprobar() {
    pintado = false;
    $('.zoom').removeClass("zoom"); //la imagen seleccionada se despinta

    if (letraSelec[0] == letraActual) {
        msj('--------------- Buen trabajo  -------------', 'Vas muy bien. Sigue asi!', 'Cerrar');
        if (letraActual == "u") {
            cambiarTit();
            var cambio = document.getElementById("imgsonido"); //Para que reproduzca sonido de la E
            cambio.id = "imgletrae";

        } else {
            level++;
            window.location.href = 'n1j'+level+'.html';
        }
    } else {
        msj('--------------- Te equivocaste!  -------------', 'Segui intentando, vas muy bien!', 'Cerrar');
    }


}

/******************* CAMBIAR LETRA ACTUAL  *********************/
function cambiarTit() {
    document.getElementById("letra").innerHTML = "Estoy pensando en algo que empiecen con E";
    letraActual= e; 
    console.log(letraActual);
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
    var valor = document.getElementById("val");

}





function startArtyom() {
    artyom.initialize({
        lang: "es-ES",
         continuous: false, // Reconoce 1 solo comando y para de escuchar
         listen: true, // Iniciar !
         debug: true, // Muestra un informe en la consola
         speed: 1 // Habla normalmente
            });

    //Reproduce el sonido de la imagen asociada a ese ID
     
            //CAMBIAR PARA QUE LO TOME POR DATA

        $('#ala').click(function() {
            artyom.say("Ala")
        });

        $('#anana').click(function() {
            artyom.say("Anana")
        });

        $('#anillo').click(function() {
            artyom.say("Anillo")
        });

        $('#anteojos').click(function() {
            artyom.say("Anteojos")
        });

        $('#araña').click(function() {
            artyom.say("Araña")
        });
        $('#arbol').click(function() {
            artyom.say("Arbol")
        });
        $('#aro').click(function() {
            artyom.say("Aro")
        });
        $('#auto').click(function() {
            artyom.say("Auto")
        });
        $('#elefante').click(function() {
            artyom.say("Elefante")
        });
        $('#empanadas').click(function() {
            artyom.say("Empanadas")
        });
        $('#escoba').click(function() {
            artyom.say("Escoba")
        });
        $('#escuela').click(function() {
            artyom.say("Escuela")
        });
        $('#espada').click(function() {
            artyom.say("Espada")
        });
        $('#espejo').click(function() {
            artyom.say("Espejo")
        });
        $('#estante').click(function() {
            artyom.say("Estante")
        });
        $('#estrella').click(function() {
            artyom.say("Estrella")
        });
        $('#iglesia').click(function() {
            artyom.say("Iglesia")
        });
        $('#iman').click(function() {
            artyom.say("Imán")
        });
        $('#indio').click(function() {
            artyom.say("Índio")
        });
        $('#isla').click(function() {
            artyom.say("Isla")
        });
        $('#mano').click(function() {
            artyom.say("Mano")
        });
        $('#martillo').click(function() {
            artyom.say("Martillo")
        });
          $('#muñeca').click(function() {
            artyom.say("Muñeca")
        });
        $('#ojo').click(function() {
            artyom.say("Ojo")
        });
        $('#ojota').click(function() {
            artyom.say("Ojota")
        });
        $('#ola').click(function() {
            artyom.say("Ola")
        });
        $('#olla').click(function() {
            artyom.say("Olla")
        });
        $('#oreja').click(function() {
            artyom.say("Oreja")
        });
        $('#oso').click(function() {
            artyom.say("Oso")
        });
        $('#oveja').click(function() {
            artyom.say("Oveja")
        });
        $('#uña').click(function() {
            artyom.say("Uña")
        });
        $('#uno').click(function() {
            artyom.say("Uno")
        });
        $('#utiles').click(function() {
            artyom.say("Utiles")
        });
        $('#uva').click(function() {
            artyom.say("Uva")
        });
                        
        $('#imgletrae').click(function() {
            artyom.say("Estoy pensando en algo que empieza con la letra E") //Agregar con LetraActual y cambiar los id paraque sean todos iguales
        });

        $('#imgsonido').click(function() {
            artyom.say("Estoy pensando en algo que empieza con la letra U")
        });

        $('#imgsonido1').click(function() {
            artyom.say("Ayuda a Tini a elegir los dibujos que comienzan con la letra A")
        });

}