//Promesas
//Se crean objetos de tipo promesa con atributos que luego se utilizarán con ".then()"
let miPromesa = new Promise((resolver, rechazar) => {
    let expresion = true;
    if(expresion){
        resolver("Resolvió correcto");
    }else{
        rechazar("Se produjo un error");
    }
});

/*
//se usa then() en el objeto para determinar su estado
miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
);

//then() con .catch()
miPromesa.then(
    valor => console.log(valor).catch(error => console.log(error))
);
*/


//Modo asincrono con prormesas. Las promesas se pueden trabajar promesas anidadas 
let promesa = new Promise((resolver) =>{
    console.log("Inicio promesa");
    setTimeout( () => resolver("saludos con promesa y timeout"), 1000);
    console.log("Fin promesa");
});

promesa.then(
    valor => console.log(valor)
);



//Async indica que una función regresa una promesa
async function miFuncionConPromesa(){
    return "saludos con promesa y async";
}
miFuncionConPromesa().then(
    valor => console.log(valor)
);



//await y async
async function  funcionConPromesaYAwait(){
    let miPromesa = new Promise(resolver =>{
        resolver("Promesa con await");
    });

    //await (solo se puede realizar dentro de una función declarada con async)
    console.log( await miPromesa);
}

funcionConPromesaYAwait();



//Promesas, await, async y setTimeout
async function funcionConPromesaYAwaitYTimeout(){
    let miPromesa = new Promise(resolver => {
        setTimeout(() => resolver("promesa con async, await y timeout"), 3000);
    });
    console.log(await miPromesa);
    console.log("fin función");
}
funcionConPromesaYAwaitYTimeout();


