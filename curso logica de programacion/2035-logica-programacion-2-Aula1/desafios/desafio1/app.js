
//Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
let titulo = document.querySelector('h1');

titulo.innerHTML ='Hora del Desafío '

//Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
function mensajeCon(){
    console.log('El botón fue clicado');
}

//Crea una función que se ejecute cuando se haga clic en el botón "prompt",
//preguntando el nombre de una ciudad de Brasil. Luego, 
//muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".

function mensajePron(){
    let nombreCiudad =  prompt("ingresa nombre de una ciudad de brasil");

    alert(`Estuve en ${nombreCiudad} y me acordé de ti`)
}

//Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".

function mensajeAler(){
    alert("Yo amo JS")
}

//Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function mensajeResult(){
    let num1 = parseInt(prompt('ingresa numero: '));
    let num2 = parseInt(prompt('ingresa numero: '));

    let resultado = num1 + num2;

    alert(`la suma de ${num1} y ${num2} es igual a ${resultado}`);
}

