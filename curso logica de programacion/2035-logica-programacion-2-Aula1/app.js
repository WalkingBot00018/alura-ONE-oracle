/* forma basica para hacerlo primera forma osea declarar variables y el document
             //puente para conectar html y js
let titulo = document.querySelector('h1');
             //muestra ya lo que quieres
titulo.innerHTML= 'juego del numero secreto'

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'indica un numero de 1 al 10'
*/
//comprobar 
let numeroSecreto = generarNumeroSecreto();

//funciones
function verificarIntento(){
                                            //seleccionar un elemento del documento por medio del valor del atributo id que se le haya asignado
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroDeUsuario));
    
    console.log(numeroDeUsuario);
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario === numeroSecreto);
    return
};

//funcion ya mas automatizada encapsulada a esta funcion haciendo las dos del h1 y h2 al del la primera forma dque se hiso
function asignarTextoElementos(elemento, texto){
                //puente para conectar html y js
    let elementoHtml = document.querySelector(elemento);
    //muestra ya lo que quieres
    elementoHtml.innerHTML= texto
}



//funcion para generar numero aleatorio
function generarNumeroSecreto(){
    return  Math.floor(Math.random()*10)+1;
    
}





//llamada de las funciones de la funcion asignartextoelementos
asignarTextoElementos('h1', 'juego del numero secreto');
asignarTextoElementos('p', 'indica numero del 1 al 10');