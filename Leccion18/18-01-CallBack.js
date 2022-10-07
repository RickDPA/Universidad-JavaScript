
//Ejemplo de funciones secuenciales
function miFuncion1(){
    console.log("función 1");
}

function miFuncion2(){
    console.log("función 2");
}

miFuncion1();
miFuncion2();


//Función de tipo callback
function imprimir(mensaje){
    console.log(mensaje);
}
//Agregas una función como un atributo y la puedes manipular dentro de otra función
function suma(op1, op2, funcionCallBack){
    let res = op1 + op2;
    funcionCallBack("Resultado: " + res);

}
suma(5,3, imprimir);



//Llamadas asincronas con el uso de "setTimeout"
function miFuncionCallBack(){
    console.log("Saludo asincrono después de 3 seg");
}

//setTimeout realizá una asignación con un parametro de tiempo determinado en milisegundos
setTimeout(miFuncionCallBack, 3000);//después de 3 seg
setTimeout(function () { console.log("Saludo asincrono 2")}, 5000);//después de 5 seg
setTimeout(() => console.log("Saludo asincrono 3"), 7000);//después de 7 seg



//Llamadas con el uso de "setInterval"
let reloj = () => {
    let fecha = new Date()
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

//setInterval(reloj, 1000);//se realiza cada 1 seg

