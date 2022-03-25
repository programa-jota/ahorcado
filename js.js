var btnNuevaPalabra = document.getElementById("btn-nueva_palabra");
eventoTecla = document.addEventListener("keydown", letraEscritas);
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

/* variables globales */
palabrasSecretas = ["PERRO", "GATO", "PAJARO"];
tamanhoArreglo = palabrasSecretas.length - 1;
numeroAleatorio = Math.round(Math.random()*tamanhoArreglo);
btnNuevaPalabra.onclick = recargarPagina;
contador = 0;
contadorHorca = 0;

/* Deja pasar solo letras */
function letraEscritas(evento){
    /* console.log("letra escrita"); */
    var letraEscrita = evento.key;
    if (evento.keyCode >= 65 && evento.keyCode <= 90){
        palabraCorrecta(letraEscrita.toUpperCase());
        /* console.log("confirma la letra"); */
    }else{
        alert("solo letras mijo");
    }
    
}

/* Recargo la pagina para seleccionar una nueva palabra*/
function recargarPagina(){
    location.reload();      
}

/* Dibuja los guiones para el ahorcado */
function dibujarGuion(){
    
    /* var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d"); */
    var numeroDeLetras = palabrasSecretas[numeroAleatorio].length + 1;
    
    for (var i = 1; i < numeroDeLetras; i++){
        
        var x = 50 * i;
        pincel.strokeStyle = "#07004d";
        pincel.lineWidth = 2;
        pincel.beginPath(); /* comenzar camino */
        pincel.moveTo(x, 400); /* pocisionar el pincel (x,y)*/
        pincel.lineTo((x+40), 400); /* dibujar la linea */
        pincel.stroke();
    }

} 
dibujarGuion();

/* Funcion para dibujar letra */
function dibujarLetra(l, x){
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "#07004d";
    pincel.font = "30px arial";
    pincel.fillText(l, x, 395);
}

/* Funcion para dibujar letra */
function dibujarLetraEquivocada(l, x){
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "#07004d";
    pincel.font = "20px arial";
    pincel.fillText(l, x, 500);
}

/* Funcion para dibujar la letra correcta */
function palabraCorrecta(l){
    var palabraSeleccionada = palabrasSecretas[numeroAleatorio];
    /* console.log("dibujando letra") */
    var esLetra = false;
    console.log(esLetra);
    
    for (var i = 0; i<palabraSeleccionada.length; i++){
        if(l === palabraSeleccionada[i]){
            var esLetra = true;
            if (i === 0){
                dibujarLetra(palabraSeleccionada[i], 65);
            } 
            if (i === 1){
                dibujarLetra(palabraSeleccionada[i], 110);
            } 
            if (i === 2){
                dibujarLetra(palabraSeleccionada[i], 160);
            } 
            if (i === 3){
                dibujarLetra(palabraSeleccionada[i], 210);
            } 
            if (i === 4){
                dibujarLetra(palabraSeleccionada[i], 260);
            } 
            if (i === 5){
                dibujarLetra(palabraSeleccionada[i], 310);
            } 
        }
    }
    if (esLetra == false){
        console.log("letra incorrecta");
        palabraIncorrecta(l);
    }
}

/* Funcion para dibujar la palabra incorrecta */
function palabraIncorrecta(l){
    
    contador = contador + 20;
    /* console.log(contador); */
    dibujarLetraEquivocada(l, contador);
    dibujarHorca();
}

/* Funcion que dibuja la horca cada vez que no acertan una letra */
function dibujarHorca(){
    console.log("dibujarHorca");
    contadorHorca = contadorHorca + 1;
    console.log(contadorHorca);
/* Horca */
    if (contadorHorca === 1){
        console.log("Entrando para dibujar horca");
        pincel.strokeStyle = "#07004d";
        pincel.lineWidth = 2;
        pincel.beginPath(); /* comenzar camino */
        pincel.moveTo(30, 350); /* pocisionar el pincel */
        pincel.lineTo(300, 350); /* dibujar la linea */
        pincel.moveTo(50, 350); /* pocisionar el pincel */
        pincel.lineTo(50, 50); /* dibujar la linea */
        pincel.lineTo(150, 50); /* dibujar la linea */
        pincel.lineTo(150, 80); /* dibujar la linea */
        pincel.stroke();
    }
/* Cabeza */
    if(contadorHorca === 2){
        pincel.fillStyle = "#07004d";
        pincel.beginPath(); /* comenzar camino */
        pincel.arc(150,110,30,0,2*3.14);
        pincel.fill();
    }
/* Tronco */
    if(contadorHorca === 3){
        pincel.strokeStyle = "#07004d";
        pincel.lineWidth = 2;
        pincel.beginPath(); /* comenzar camino */
        pincel.moveTo(150, 110);
        pincel.lineTo(150,230);
        pincel.stroke();
    }
/* Pierna izquierda */
    if(contadorHorca === 4){
        pincel.strokeStyle = "#07004d";
        pincel.lineWidth = 2;
        pincel.beginPath(); /* comenzar camino */
        pincel.moveTo(150, 230);
        pincel.lineTo(120, 290);
        pincel.stroke();
    }
/* Pierna derecha */
    if(contadorHorca === 5){
        pincel.strokeStyle = "#07004d";
        pincel.lineWidth = 2;
        pincel.beginPath(); /* comenzar camino */
        pincel.moveTo(150, 230);
        pincel.lineTo(170, 290);
        pincel.stroke();
    }
/* Brazo izquierdo */
    if(contadorHorca === 6){
        pincel.strokeStyle = "#07004d";
        pincel.lineWidth = 2;
        pincel.beginPath(); /* comenzar camino */
        pincel.moveTo(150, 140);
        pincel.lineTo(120, 190);
        pincel.stroke();
    }
/* Brazo derecho */
    if(contadorHorca === 7){
        pincel.strokeStyle = "#07004d";
        pincel.lineWidth = 2;
        pincel.beginPath(); /* comenzar camino */
        pincel.moveTo(150, 140);
        pincel.lineTo(175, 190);
        pincel.stroke();

        alert("¡Perdiste!");
    }
}