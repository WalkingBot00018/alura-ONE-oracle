/* forma basica para hacerlo primera forma osea declarar variables y el document
             //puente para conectar html y js
let titulo = document.querySelector('h1');
             //muestra ya lo que quieres
titulo.innerHTML= 'juego del numero secreto'

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'indica un numero de 1 al 10'
*/
//comprobar 

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMximo = 10;

//funcion del juego del numero secreto
function verificarIntento(){
                                            //seleccionar un elemento del documento por medio del valor del atributo id que se le haya asignado
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElementos('p', `acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        //el usuario no acerto
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElementos('p', 'el numero secreto es menor ');
        }else{
            asignarTextoElementos('p', 'el numero secreto es mayor');
        }
        intentos ++;
        limpiarCaja();
    }
    return;
};

function limpiarCaja(){
    /* 
    primera forma

    let valorCaja = document.querySelector('#valorUsuario')
    valorCaja.value = '';
    */
   //segunda forma
   document.querySelector('#valorUsuario').value = '';
}

//funcion ya mas automatizada encapsulada a esta funcion haciendo las dos del h1 y h2 al del la primera forma dque se hiso
function asignarTextoElementos(elemento, texto){
                //puente para conectar html y js
    let elementoHtml = document.querySelector(elemento);
    //muestra ya lo que quieres
    elementoHtml.innerHTML= texto
}



//funcion para generar numero aleatorio
function generarNumeroSecreto(){
    let numeroGenerado =  Math.floor(Math.random()*numeroMximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMximo){
        asignarTextoElementos('p','ya se asignaron todos los numeros posibles');
    }else{
        //si el numero generado esta inccluido esta en la lista 
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    }
    
};

function condicionesIniciales(){

    asignarTextoElementos('h1', 'juego del numero secreto');
    asignarTextoElementos('p', `indica numero del 1 al ${numeroMximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalos de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
};
//llamada de las funciones 
condicionesIniciales();





