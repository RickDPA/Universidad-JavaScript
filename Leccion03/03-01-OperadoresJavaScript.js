//Tipos de operadores

let a = 3, b = 2;
let z = a + b;
console.log( "Resultado de la suma: " + z );

z = a - b;
console.log( "Resultado de la resta: " + z );

z = a * b;
console.log( "Resultado de la multiplicación: " + z );

z = a / b;
console.log( "Resultadoa de la división: " + z );

z = a % b;
console.log( "Resultado de operación módulo (residuo): " + z );

z = a ** b;
console.log( "Resultado de operador exponente: " + z );



//Gerarquía de operadores 

let a1 = 3, b1 = 2, c1 = 1, d1= 4;

let z1 = a1 * b1 + c1;
console.log(z1);

z1 = c1 + a1 * b1;
console.log(z1);

z1 = a1 * b1 + c1 / d1;
console.log(z1);

z1 =  c1 + a1 * b1 / d1;
console.log(z1);

z1 = (c1 + a1) * b1 / c1;
console.log(z1);



//Operadores de asignación
let a2 = 1;
a2 += 3; //a = a + 3 == a = 1 + 3
console.log(a2);

a2 -= 2;// a = a - 2
console.log(a2);

/* Otros operadores:
    += 
    /= 
    %=
    **=
*/


//Operadores de comparación

let a3 = 3, b3 = 2, c3 = "3";

//---------------------------
let z3 = (a3 == b3);
console.log(z3);

z3 = (a3 === c3);
console.log(z3);

z3 = (a3 == c3);
console.log(z3);

//---------------------------
z3 = (a3 != c3);
console.log(z3);

z3 = (a3 !== c3);
console.log(z3);

//---------------------------
b3 = 3;

z3 = a3 < b3;
console.log(z3);

z3 = a3 <= b3;
console.log(z3);

z3 = a3 > b3;
console.log(z3);

z3 = a3 >= b3;
console.log(z3);


// Ejercicio par o impar

let a4 = 10;

if (a4 % 2 == 0){
    console.log( "Es un número par" );
}else{
    console.log( "Es un número impar" );
}

//Ejercicio mayor o no
let edad = 17, adulto = 18;

if (edad >= adulto){
    console.log( "Es un adulto" );
}else{
    console.log( "Es menor de edad" );
}

//OPERADORES LÓGICOS//

//AND (&&): Ambos deben ser verdadero para regresar verdadero

let a5 = 2, valMin = 0, valMax = 10;

if(a5 >= valMin && a5 <= valMax){
    console.log("Dentro de rango");
}else{
    console.log( "Fuera de rango" );
}


//OR (||): Con uno que sea verdadero regresa verdadero

let vacaciones = true, diaDescanso = false;

if(vacaciones || diaDescanso){
    console.log("El padre puede asistir al juego del hijo");
}else{
    console.log("El padre está ocupado");
}

// Condicion ? Expr1 : Expr2;

let resultado = (3 > 2) ? "Verdadero" : 0;
console.log(resultado);

let numero = 9;
resultado = (numero % 2 == 0) ? "Número par" : "Número impar";
console.log(resultado);


//String a número

let miNumero = "10";
console.log(miNumero);
console.log(typeof miNumero);

let edad1 = Number(miNumero);
console.log(typeof edad1);

if (edad1 >= 18){
    console.log("Puede votar");
}else{
    console.log("Muy joven para votar");
}

let condicion = (edad1 >= 18) ? "Puede votar" : "Muy joven para votar";
console.log(condicion);


//Number con cadena no númerica (NaN)

miNumero = "10"
edad1 = Number(miNumero);
console.log(edad1);

if(isNaN(edad1)){
    console.log("No es un número");
}else{
    if (edad1 >= 18){
        console.log("Puede votar");
    }else{
        console.log("Muy joven para votar");
    }  
}

//Precedencia de operadores 
let x2 = 5, y2 = 10;
let z2 = ++x2 + y2--;
console.log(x2);
console.log(y2);
console.log(z2);

let resultado2 = 4 + 5 * 6 / 3 ;
console.log(resultado2);  

resultado2 = (4 + 5) * 6 / 3;
console.log(resultado2);