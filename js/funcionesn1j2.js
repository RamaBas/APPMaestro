var pintado = false;
var letraActual="o";
var letraSelec = null;
var sndOK = new Audio("../sonidos/ganaste.wav");
var sndNO = new Audio("../sonidos/error.wav");

function enmarcar(event) {
    selec = event.target;
    console.log(selec);
    if (pintado == false) {
        selec.className += " cambiarBorde2";
        pintado = true;
        letraSelec = selec.id;
    } else {
        $('.cambiarBorde2').removeClass("cambiarBorde2");
        selec.className += " cambiarBorde2";
        letraSelec = selec.id;
    }
}

/*Cartelito*/

function confirmar(){
                sndOK.play();
                alertify.confirm("<img src='../img/feliz.jpg'> <p>Buen trabajo! <b>Acertaste!</b> <br> Seguimos jugando?", function (e) {
                    if (e) {
                        alertify.success("Has pulsado '" + alertify.labels.ok + "'");
                         setTimeout(function() {
                window.location.href = '../html/n1j3.html'; //Pasa al siguiente juego
            }, 1300);
                    } else { alertify.error("Has pulsado '" + alertify.labels.cancel + "'");
                    }
                }); 
                return false
            }

function alerta(){
      //un alert
      sndNO.play();
      alertify.alert("<img src='../img/triste.jpg'><b>Ups! Te equivocaste</b> Segui intentando!", function () {
            //aqui introducimos lo que haremos tras cerrar la alerta.
      });
}

function comprobar() {
    pintado = false;
    $('.cambiarBorde2').removeClass("cambiarBorde2"); //la imagen seleccionada se despinta

    if (letraSelec == letraActual) {
       confirmar();
    } else {
       alerta();}
}
