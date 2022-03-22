var btnNuevaPalabra = document.getElementById("btn-nueva_palabra");

/* variables globales */
palabrasSecretas = ["PERRO", "GATO", "PAJARO"];
tamanhoArreglo = palabrasSecretas.length - 1;
numeroAleatorio = Math.round(Math.random()*tamanhoArreglo);
letraEscrita = "A";

btnNuevaPalabra.onclick = recargarPagina;

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
        pincel.strokeStyle = "blue";
        pincel.beginPath(); /* comenzar camino */
        pincel.moveTo(x, 500); /* pocisionar el pincel */
        pincel.lineTo((x+40), 500); /* dibujar la linea */
        pincel.stroke();
    }

} 

dibujarGuion();
function dibujarLetra(l, x){
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "blue";
    pincel.font = "30px arial";
    pincel.fillText(l, x, 498);
}
function palabraCorrecta(){
    var palabraSeleccionada = palabrasSecretas[numeroAleatorio];
    
    for (var i = 0; i<palabraSeleccionada.length; i++){
        if(letraEscrita === palabraSeleccionada[i]){
            console.log(i);
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
}
palabraCorrecta();