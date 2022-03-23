var btnNuevaPalabra = document.getElementById("btn-nueva_palabra");
eventoTecla = document.addEventListener("keydown", letraEscritas);

/* variables globales */
palabrasSecretas = ["PERRO", "GATO", "PAJARO"];
tamanhoArreglo = palabrasSecretas.length - 1;
numeroAleatorio = Math.round(Math.random()*tamanhoArreglo);
btnNuevaPalabra.onclick = recargarPagina;
contador = 0;



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

/* Recargao la pagina para seleccionar una nueva palabra*/
function recargarPagina(){
    location.reload();      
}

/* Dibuja los guiones para el ahorcado */
function dibujarGuion(){
    
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    var numeroDeLetras = palabrasSecretas[numeroAleatorio].length + 1;
    
    for (var i = 1; i < numeroDeLetras; i++){
        
        var x = 50 * i;
        pincel.strokeStyle = "#07004d";
        pincel.lineWidth = 2;
        pincel.beginPath(); /* comenzar camino */
        pincel.moveTo(x, 400); /* pocisionar el pincel */
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
    console.log(contador);
    dibujarLetraEquivocada(l, contador);
    
}
