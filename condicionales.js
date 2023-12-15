

/*operador
es un signo que especifica que debe efectuar una determinada operacion*/

/*
Operadores aritmeticos 
operadores de asignacion 
operadores logicos
operadores de comparacion
operadores de cadena 
*/
/*
operadores aritmeticos
(+): suma, se utiliza para sumar dos numeros
(-): resta, se utiliza para restar un numero de otro
(*): multiplicacion, se utiliza para multiplicar dos numeros
(/): division, se utiliza para dividir un numero entre otro
(%):residuo, se utiliza para obtener el resto de una division
(++): incremento, aumento de uno en uno la cantidad o el numero
(--): decremento, disminuye de uno en uno la cantidad o el numero

*/
let numero1 = 10;
let numero2 = 8;

suma = numero1 + numero2;
multiplicacion = numero1 * numero2;
division = numero1 / numero2; 
residuo = numero1 % numero2; 
incremento = numero1;   
incremento ++; 
decremento = numero2; 
decremento --;
resta = numero1 - numero2;  


console.log(suma);
console.log(multiplicacion);
console.log(division);
console.log(residuo);
console.log(incremento);
console.log(decremento);
console.log(resta);


let precioReal = 1000;
let porcentajeDescuento = 20;
let cantidadDescuento = (precioReal * porcentajeDescuento)/100;
let precioConDescuento = precioReal - cantidadDescuento;

console.log("Precio Real:$" + precioReal);
console.log("porcentaje de descuento:" + porcentajeDescuento + "%");
console.log("Cantiidad de descuento:$" + cantidadDescuento);
console.log("Precio con descuento:$" + precioConDescuento);

/* Operadores de asignación 
=: este operador no compara, lo que hace es asignar*/

//let frutas = manzana;

/* Operadores de comparacion
(==): Igualdad compara si nuestros valores son iguales

*/
let numero3 = 10;
let texto = "10";
console.log(numero3 == texto);
/*(===): Igualdad estricta, compara si los valores son iguales y el tipo de dato*/
let numero4 = 10;
let texto1 = "10";
console.log(numero4 === texto1);


/* (!=): Desigualdad o distinto este operador verifica si dos valores no son iguales y de ser necesario realiza la conversion*/

let precioCaja = 1499;
let precioMaximo = 1500;

if(precioCaja != precioMaximo){
    
    console.log("El precio del producto es diferente");
} else {


    console.log("El precio es el mismo");

}

// (!=) Desigualdad 

let numero5 = 10;
let numero6 = 10;

if (numero5 !== numero6){
    console.log("Son Diferentes");
} else {
    console.log("Los Valores son iguales");
}

// (!==) Desigualdad estricta

let numero7 = 41;
let numero8 = "50";

if (numero7 !== numero8){
    console.log("Los valores estan diferentes");
}  
else {
    console.log("Los valores son iguales");
}

//(>): Mayor que 
let puntuacionFinal = 85;
let puntuacionRequerida = 102;

console.log(puntuacionFinal > puntuacionRequerida);
//(<): menor que 
let anios = 20;
let edadLimite = 30;

console.log(anios < edadLimite);

//(>=): mayor o igual que y nos dice si un valor es mayor o igual a otro
let edad = 40;
let edadNecesaria = 18;
console.log(edad >= edadNecesaria);

//(>=)Menor o igual que y nos indica si un valor es enor o igual a otro

let temperatura = 14;
let temperaturaMaxima = 21;
console.log(temperatura <= temperaturaMaxima);

// Ejercicio 1

const primerNumero = prompt('Ingrese el primer número: ');
const segundoNumero = prompt('Ingrese el segundo número: ');

if (primerNumero == segundoNumero) {
  console.log('Los números son iguales.');
} else if (primerNumero > segundoNumero) {
  console.log(`${primerNumero} es mayor que ${segundoNumero}.`);
} else {
  console.log(`${segundoNumero} es mayor que ${primerNumero}.`);
}

//Ejercicio 2

const palabra1 = prompt('Ingrese la primera palabra: ');
const palabra2 = prompt('Ingrese la segunda palabra: ');

if (palabra1 === palabra2) {
  console.log('Las palabras son iguales.');
} else {
  console.log('Las palabras son diferentes.');
}



// && AND
let mayoriaDeEdad = 18;
let tieneIdentificacion = true;
if(mayoriaDeEdad >= 18 && tieneIdentificacion){
    console.log("Puedes rentar el Salon")
} else {
        console.log("no puedes rentarlo");
}



//(||) or es una condicion u otra
let esPrime = false;
let descuento = true;

if(esPrime || descuento) {
    console.log ("Califica para descuento");
} else {
    console.log("no califica para descuento");
}

//(!) NOT

let esDiaLibre = false;

if (!esDiaLibre){
    console.log ("Se trabaja");
} else{
    console.log("Descansito");
}

// to lowercase

const mensajeUsuario = "Bienvenidos a la Tierra";
const cambioMinusculas = mensajeUsuario.toLowerCase();
console.log(cambioMinusculas);

//trim quita los espacios 

let aviso = " Ch35 best"
let sinEspacios = aviso.trim();
console.log(sinEspacios);

//ToString convierte datos number a string

let numero15 = 31;
let cadenas = numero15.toString();
console.log(cadenas);

//concat

let nombre = "Fernanda";
let apellido = "Ramos";
let nombreCompleto = nombre.concat(" ",apellido);
console.log(nombreCompleto);

/* Expresiones

**expresion aritmetica

let operacion = 14 + 25 * 12; combina la suma con la multiplicacion 

**expresion de cadena

let notificacion = "Casi, " + "Anio Nuevo"
expresion concatenando

**expresion logica

let esMayordeEdad = (23 > 18) && (23 < 65); tiene operadores logicos y de comparacion

expresion de asignacion 
let frasco = chocolates; asigna el valor a la variable
*/
// Función que verifica los ingredientes y muestra la receta
function hacerHotcakes(tieneHarina, tieneHuevo) {
    // Verificar si tiene los ingredientes necesarios para hacer hotcakes
    if (tieneHarina && tieneHuevo) {
        // Si tiene harina y huevos, continuar con la receta
        console.log("¡Perfecto! Tienes los ingredientes necesarios para hacer hotcakes.");

        // Resto de la receta
        console.log("1. Mezcla la harina con los huevos y otros ingredientes.");
        console.log("2. Calienta una sartén a fuego medio.");
        console.log("3. Vierte la mezcla en la sartén caliente.");
        console.log("4. Cocina ambos lados hasta que estén dorados.");
        console.log("5. ¡Disfruta tus deliciosos hotcakes!");

    } else {
        // Si no tiene harina o huevos, mostrar un mensaje
        console.log("Lo siento, no tienes todos los ingredientes necesarios para hacer hotcakes. ¡Ve a comprarlos!");
    }
}

// Solicitar al usuario si tiene los ingredientes necesarios
var tieneHarina = confirm("¿Tienes harina?");
var tieneHuevo = confirm("¿Tienes huevos?");

// Llamar a la función con los valores proporcionados por el usuario
hacerHotcakes(tieneHarina, tieneHuevo);