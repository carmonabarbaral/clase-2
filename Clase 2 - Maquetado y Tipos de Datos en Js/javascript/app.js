// Tipos de datos:

let tipoNumero = 1000;

let tipoString = "Esto una cadena de caracteres";

// Los tipos boolean pueden ser true o false
let tipoBoolean = false;

let tipoUndefined;

// Tipo de datos objetos:

// Arrays: Listas indexadas

let lista = ["producto1", "producto2", 100, false];

// Objetos: Son una especie de lista que te permite nombrar cada valor.
let objeto = { producto1: "celular", producto2: "tablet" };

// Capturar elementos html en variables

// const h1 = document.querySelector("h1");
// const btnSuma = document.querySelector("#btnSuma");

// Funciones (Presentacion):

function sumar(x, y) {
	return x * y;
}

// EventListener: Eventos a los que puedo acceder a traves del dom

// Evento Click:

// Definimos una funcion que va a ejecutar una alerta.

// Capturamos en una constante llamada h1, el elemento h1 de mi DOM

// Le decimos a ese elemento que aguarde un click y que cuando lo reciba ejecute la fc decirNombre.

// btnSuma.addEventListener("click", sumar);

// Modificar estilos CSS:

const btnMenu = document.querySelector("#btnMenu");

const nav = document.querySelector("#nav");

function mostrarMenu() {
	nav.classList.toggle("mostrar");
}

btnMenu.addEventListener("click", mostrarMenu);

// Como agregar estilos a mis elementos:

// LLaman al elemento y le agregan la siguiente sintaxis (donde elemento es la constante en la que fue guardado el elemento)

// elemento.style.color = 'red'

// Como sacar y poner una clase en csss

// elemento.classList.toggle('active')

// Obviamente tienen que crear una funcion que ejecute estas ordenes y enlazarla al evento click.

const h1 = document.querySelector("h1");

function cambiarFondo() {
	h1.style.backgroundColor = "black";
	h1.style.color = "white";
}

h1.addEventListener("click", cambiarFondo);

// Tarea:

// 1. Crear una funcion que reciba 2 parametros y retorne la suma de esos dos parametros.
// 2. Crear una funcion que reciba 2 parametros y retorne la resta de esos dos parametros.
// 3. Crear una funcion que reciba 2 parametros y retorne la multiplicacion de esos dos parametros.
// 4. Crear una funcion que reciba 2 parametros y retorne la division de esos dos parametros.
// 5. Crear una funcion que reciba 2 parametros y retorne la un string con un saludo igual a 'Hola, me llamo NOMBRE APELLIDO' (en una alerta).
// 6. Crear una funcion que reciba 1 parametros (string) y retorne una alerta con ese string
// 7. Crear una funcion que reciba 2 parametros y retorne por consola el modulo de ambos.
// 9. Crear una funcion que retorne un dato booleano por consola.
