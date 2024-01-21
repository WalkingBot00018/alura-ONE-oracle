/*Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo",
 muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!". 
*/

alert("bienvenido");
let semanado =  "domingo";
semanasa = "sabado";
let preguntaSemana = prompt("ingrese que dia de la semana es: ");

if (preguntaSemana == semanado){
    alert("¡Buen fin de semana!");
}else if (preguntaSemana == semanasa){
        alert("¡Buen fin de semana!");
}else{
    alert("¡Buena semana!");
}

/*Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa. */

alert("numeros :D")
let numero = prompt("ingresa numero del 1 al 20: ");

if (numero >= 1){
    alert("es mayor");
}else{
    alert("es menor");
}

/*
Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!".
En caso contrario, muestra "Intenta nuevamente para ganar.".
*/

alert("puntuacion");
let puntos = prompt("ingrese la puntuacion que gano: ")

if (puntos >= 100){
    alert("¡Felicidades, has ganado!")
}else{
    alert("Intenta nuevamente para ganar")
}

/*
Crea un mensaje que informe al usuario sobre el saldo de su cuenta, 
utilizando un template string para incluir el valor del saldo.
*/
let saldoCuenta = 20.000
alert(`su saldo de cuenta es: ${saldoCuenta}`)

/*Pide al usuario que ingrese su nombre mediante un prompt. Luego,
 muestra una alerta de bienvenida usando ese nombre. */

let nombre = prompt("ingrese nombre: ")
alert(`Bienvenido ${nombre}`)