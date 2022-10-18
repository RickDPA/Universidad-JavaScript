let saludo:string = "HolaMundo desde TypeScript";

//saludo = 10; No se puede, en TypeScript cuando incializas una variable esta no puede modificar su tipo
saludo = "cambio"; //Esto si es válido porque se cambia el contenido pero no el tipo de dato

let numero:number = 10;

let cualquiera:any = "cadena";
cualquiera = 10;

const PI = 3.14;
//PI = 12; Las constantes no pueden cambiar su valor
//Como regla, las constantes se inicializan con mayúsculas y si tiene más palarbas se agrega un guión bajo

function saludar(){
    console.log(saludo);
    console.log(numero);
    console.log(PI);
} 

saludar();