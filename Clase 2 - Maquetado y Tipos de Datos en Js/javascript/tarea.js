// 1. Crear una funcion que reciba 2 parametros y retorne la suma de esos dos parametros.
function suma(a,b) {
    return a+b ;
}
let resultado = suma(10,9);

console.log (resultado);
//Crear una funcion que reciba 2 parametros y retorne la resta de esos dos parametros.
function resta(a,b) {
    return a-b ;
}
 resta(100,50);

console.log (resultado);
//Crear una funcion que reciba 2 parametros y retorne la multiplicacion de esos dos parametros.
function multiplicar(a,b) {
    return a*b ;
}
 multiplicar(9,3);

console.log (resultado);
// 4. Crear una funcion que reciba 2 parametros y retorne la division de esos dos parametros.
function dividir(a,b) {
    return a/b ;
}
dividir(10,2);

console.log (resultado);
// 5. Crear una funcion que reciba 2 parametros y retorne la un string con un saludo igual a 'Hola, me llamo NOMBRE APELLIDO' (en una alerta).


function saludar() {
    return ("Hola me llamo"+nombre+apellido);
}
let nombre = "barbara";
let apellido = "carmona";

 alert (saludar());

 //6. Crear una funcion que reciba 1 parametros (string) y retorne una alerta con ese string
 function practicando(palabras) {
    return palabras;
  
 }
 let palabras = ("Feliz noche buena");
 alert (palabras);

 //Crear una funcion que reciba 2 parametros y retorne por consola el modulo de ambos.
 function modulo (a,b){
    return a % b;
 }
modulo (15,2);
//Crear una funcion que retorne un dato booleano por consola.
function booleanos() {
    return (false);
}
console.log (false);