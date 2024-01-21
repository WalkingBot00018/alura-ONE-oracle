//Crear una función que muestre "¡Hola, mundo!" en la consola.
function mensaje(){
    console.log("¡Hola, mundo!");
}

mensaje();

//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function mensaje2(nombre){
    console.log(`¡Hola, ${nombre}!`)

}

mensaje2("juan");

//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function reciNumero(numero){
    
    return numero * 2
    
}
let resultado =reciNumero(2);
console.log(resultado);

//Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(num1,num2,num3){
    return (num1 + num2 + num3) /3;

}
let resultado2 =promedio(2,9,4);
console.log(resultado2);

//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function cualEsMayor(numero1,numero2){
    //operador ternario (? :) para comparar dos variables
    return numero1 > numero2 ? numero1 : numero2;

}
let mayornum = cualEsMayor(10, 50);
console.log(mayornum);  

//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function siMismo(numero4){
    return numero4 * numero4

}
let resul = siMismo(3);
console.log(resul)
