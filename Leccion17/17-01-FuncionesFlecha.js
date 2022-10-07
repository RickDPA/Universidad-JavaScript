function miFuncion(){
    console.log("Saludos desde mi función");
}

miFuncion();

const miFuncionFlecha = () => {console.log("Saludos desde mi función flecha");}
miFuncionFlecha();

const saludar = () => {return "Saludos dese función saludar";}
console.log(saludar());

const regresaObjeto = () => ({nombre: "Juan", apellido: "Lara"});
console.log(regresaObjeto());

const funcionConParametros = (mensaje) => {console.log(mensaje);}
funcionConParametros("saludos con parametros");

const funcionConVariosParametros = (op1, op2) => {return op1 + op2;}
console.log(funcionConVariosParametros(3,5));



