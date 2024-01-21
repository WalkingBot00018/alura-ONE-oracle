// alert('Hola Mundo');
//preguntar al usuario
// prompt("me indicas un numero por fa:");



let maximoPosible = 100;
//variables         mat y random para numeros aleatorias
let numeroSecreto = Math.floor(Math.random()*maximoPosible)+1;

let numeroUsuario = 0;
let intentos = 1;
//let palabrasVeces = 'vez';
let maxIntento = 6;
//bucles
while (numeroSecreto !=  numeroUsuario){
    numeroUsuario = parseInt(prompt(`me indicas un numero entre 1 y ${maximoPosible} por favor:`));

    console.log(typeof(numeroUsuario));

    //condicion osea compara 
    if (numeroSecreto ==  numeroUsuario){
        //comillas invertidas para que el entienda que se va a utilizar textos y varibales y codigo javscript, para
        //las variables siempre tienen que ir asi y respetarlas
        alert(`ACERTASTE, el numero es: ${numeroUsuario} . lo hiciste en  ${intentos} ${intentos == 1? 'vez' : 'veces'}` );
    }else {

        if (numeroUsuario > numeroSecreto){
            alert("el numero secreto es menor");
        }else{
            alert("el numero secreto es mayor ")
        }

        //incrementar contador si no acierta
          //intentos = intentos + 1;
          //intentos +=1;
        intentos ++;
        //palabrasVeces = 'veces'
        if (intentos> maxIntento){
            alert(`llegaste al numero maximo de ${maxIntento} intentos `)
            break
        }
        // alert("lo siento, no acertaste el numero")
    }

}


