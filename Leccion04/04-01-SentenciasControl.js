//IF - ELSE 
let condicion = true;

if(condicion){
    console.log("Condición verdadera");
}else{
    console.log("Condición falsa");
}


//Ejemplo if - else
let numero = 1;

if(numero == 1){
    console.log("Número uno");
}else if(numero == 2){
    console.log("Número dos");
}else if( numero == 3){
    console.log("Número tres");
}else if( numero == 4){
    console.log("Número cuatro");
}else{
    console.log("Número desconocido");
}


//Ejercicio estación del año

let mes = 1;
let estacion;

if(mes == 1 || mes == 2 || mes == 12){
    estacion = "Invierno";
}else if( mes == 3 || mes == 4 || mes == 5){
    estacion = "Primavera";
}else if( mes == 6 || mes == 7 || mes == 8){
    estacion == "Verano";
}else if( mes == 9 || mes == 10 || mes == 11){
    estacion = "Otoño";
}else{
    estacion = "Valor incorrecto";
}
console.log(estacion);


//Ejercicio hora del día

let hora = 12;
let mensaje;

if(hora >= 0 && hora <6){
    mensaje = "Durmiendo";
}else if(hora >= 6 && hora <= 11){
    mensaje = "Buenos días";
}else if( hora >= 12 && hora <= 18 ){
    mensaje = "Buenas tardes";
}else if( hora >= 19 && hora <= 24){
    mensaje = "Buenas noches";
}else{
    mensaje = "Valor incorrecto";
}

console.log(mensaje);


//Switch (Importante destacar que los case comparan tipo, es decir si la variable es numérica...
// y el case Strig no la tomará como válida)

let numero1 = 1;
let numeroTexto = "Valor desconocido";

switch(numero1){
    case 1:
        numeroTexto = "Número uno";
        break;
    case 2:
        numeroTexto = "Número dos";
        break;
    case 3:
        numeroTexto = "Número tres";
        break;
    case 4:
        numeroTexto = "Número cuatro";
        break;
    default:
        numeroTexto = "Caso no encontrado";
}

console.log(numeroTexto);


//Ejercicio estación del año con Switch 

let mesSwitch = 11;
let estacionSwitch = "Valor desconocido";

switch(mesSwitch){
    case 1: case 2: case 12:
        estacionSwitch = "Invierno";
        break;
    case 3: case 4: case 5:
        estacionSwitch = "Primavera";
        break;
    case 6: case 7: case 8:
        estacionSwitch = "Verano";
        break;
    case 9: case 10: case 11:
        estacionSwitch = "Otoño";
        break;
    default:
        estacionSwitch = "Valor incorrecto";
}

console.log(estacionSwitch);