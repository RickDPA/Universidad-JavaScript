//ARREGLOS

//Crear arreglos
let autosFormaVieja = new Array("BMW", "Mercedes Benz", "Volvo"); //válido pero no recomendable
const autos = ["BMW", "Mercedes Benz", "Volvo"];
console.log(autos);


//acceder a elementos de un Arreglo por indice
console.log(autos[0]);
console.log(autos[2]);

for(let i = 0; i<autos.length; i++){
    console.log(i + ": " + autos[i]);
}


//Modificar arreglo
autos[1] = "MercedesBenzSinEspacio";
console.log(autos[1]);

autos.push("Audi");
console.log(autos);

console.log(autos.length);
autos[autos.length] = "Cadillac";
console.log(autos);

autos[6] = "Porshe"; // Válido pero no recomendable (dejar elementos vacíos, en este caso el 5)
console.log(autos);


//Preguntar si es un tipo Array
console.log(typeof autos);
console.log(Array.isArray(autos));
console.log(autos instanceof Array);
