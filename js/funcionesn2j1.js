// Juego 1
var selec = null;
var letraSelec =  null;
var sndOK = new Audio("../sonidos/ganaste.wav");
var sndNO = new Audio("../sonidos/error.wav");

function guardarValor() {
    $(".ui-widget-content").click(function(event) {
        selec = event.target;
        letraSelec = selec.id;
    })
}

/*Cartelito*/

function confirmar(){
                sndOK.play();
                alertify.confirm("<img src='../img/feliz.jpg'> <p>Buen trabajo! <b>Acertaste!</b> <br> Seguimos jugando?", function (e) {
                    if (e) {
                        alertify.success("Has pulsado '" + alertify.labels.ok + "'");
                         setTimeout(function() {
                window.location.href = '../html/n2j2.html'; //Pasa al siguiente juego
            }, 1300);
                    } else { alertify.error("Has pulsado '" + alertify.labels.cancel + "'");
                    }
                }); 
                return false
            }

function alerta(){
      sndNO.play();
      alertify.alert("<img src='../img/triste.jpg'><b>Ups! Te equivocaste</b> Segui intentando!", function () {
            //aqui introducimos lo que haremos tras cerrar la alerta.
      });
}

function sigue(){
      sndOK.play();
      alertify.alert("<img src='../img/feliz.jpg'><b>Muy bien!</b> Sigamos!", function () {
            //aqui introducimos lo que haremos tras cerrar la alerta.
      });
}

function comprobar() {
    if (letraSelec == "i") { //primer actividad del juego
        sigue();
        letraSelec = "a"; //
        $('.ocultar').removeClass("ocultar"); //oculta la primer actividad
        $("#mostrar").addClass("ocultar"); //muestra la 2da actividad
    } else {
        if (letraSelec == "a") {
            confirmar();

        } else {
            alerta();
        }
    }
}