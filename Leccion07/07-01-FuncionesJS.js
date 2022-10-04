//Declaración de una función
function miFuncion(a, b){
    console.log("Suma: " + (a + b));
}


//Llamando a la función (es posible llamarla antes siquiera de crear la función)
miFuncion(2, 3);
miFuncion(4, 5);



//Return en una función
function miFuncion2(a, b){
    return a + b;
}

let resultado = miFuncion2(2, 3);
console.log(resultado);



//Función de tipo expresión
let sumar = function(a, b){return a + b};

resultado = sumar(1,2);
console.log(resultado);


//Funciones de tipo Self Invoking

(function(a, b){
    console.log("Ejecutando la función: " + (a+b));
})(3, 4);



//Funciones como objetos
function miFuncion3(a, b){
    console.log( arguments.length  ); 
    return a + b;
}

console.log(typeof miFuncion3);

var miFuncionTexto = miFuncion3.toString();
console.log(miFuncionTexto);



//Funciones tipo flecha 
const sumarFuncionTipoFlecha = (a, b) => a + b;
resultado = sumarFuncionTipoFlecha(3,5);
console.log(resultado);



//Parámetros y argumentos de funciones 
//Parámetros: es la lista de variables que definimos en una función
//Argumentos: son los valores que pasamos cuando llamamos una función


let sumar2 = function(a = 4, b = 5){ // se pueden definir los parametros por default 
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]); //no es necesario que coincidan los parametros con los argumentos cuando se manda a llamar
    return a + b + arguments[2];
};

resultado = sumar2(3,6,7);
console.log(resultado);


//Ejemplo: Sumar todos los argumentos
let resultado2 = sumarTodo(5, 4, 13, 10, 9);
console.log( resultado2 );

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i<arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}


//Tipos primitivos
let x = 10;

function cambiarValor(a){
    a = 20;
}

//Paso por valor
cambiarValor(x);
console.log(x); //"x" no cambió aun con el método debido a que "a" es una variable independiente a "x"



//Paso por referencia
const persona = { 
    nombre: "Juan",
    apellido: "Perez"
}
console.log(persona);

function cambiarValorObjeto(p1){
    p1.nombre = "Carlos";
    p1.apellido = "Lara";
}

cambiarValorObjeto(persona);
console.log(persona);

