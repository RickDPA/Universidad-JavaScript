/*
Ejemplo de tipos de datos
en JavaScript
*/

//Tipo de dato String
var nombre = "Carlos";
console.log(nombre);

nombre = 10;
console.log(typeof nombre)

//Tipo de dato Numerico
var numero = 1000;
console.log(numero);


//Tipo de dato Object
var objeto = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "55443322"
};
console.log(typeof objeto);


//Tipo de dato bollean (true, false)
var bandera = true;
console.log(typeof bandera);


//Tipo de dato function
function miFuncion(){}
console.log(typeof miFuncion);


//Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);


//Tipo clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);


//Tipo undefined
var x;
console.log(typeof x);

x = undefined;
console.log(x);


//null = ausencia de valor
var y = null;
console.log(typeof y);


//Arreglo
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);


var z = '';
console.log(z);
console.log(typeof z);


//Concatenaciones
var nombre = "Juan";
var apellido = "Perez";

var nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

var nombreCompleto1 = 'Carlos' + ' ' + 'Lara';
console.log(nombreCompleto1);

var x = nombre + 2 + 4;
console.log(x);

x = nombre + (2 + 4);
console.log(x);

x = 2 + 4 + nombre;
console.log(x);


//let y const
let nombre2;
nombre2 = "Juan";
console.log(nombre2);

const apellido2 = "Perez";
//apellido2 = "Lara";


//buenas prácticas ( lamelcase y espacios en los paréntesis )
let nombreCompleto2 = "Juan Perez";
console.log( nombreCompleto2 );

let x1, y1;
x1 = 10, y1 = 20;
let z1 = x1 + y1;
console.log( z1 );


//reglas para definir nombres: JavaScript diferencia mayusculas y minusculas para variables
//En JavaScript no puedes iniciar el nombre de una variable por un número, solo por letras o "$"
//Tampoco se pueden usar las palabras reservadas como nombres de variables
let nombreCompleto10 = "Juan Perez";
let nombrecompleto10 = "Carlos Lara";
console.log( nombreCompleto10 );
console.log( nombrecompleto10 );
//console.log( Nombrecompleto ); No definida, por ende está mal

let a1nombreCompleto;
let _nombreCompleto;
let $nombreCompleto;
//let 1nombreCompleto;  esto ta mal
//let break = 10; esto también está mal

