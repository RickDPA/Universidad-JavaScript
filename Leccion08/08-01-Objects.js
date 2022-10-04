//OBJETOS EN JAVA

//esto no es válido, un tipo primitivo no es un objeto
let x = 10;
console.log(x.length);

//Objetos
let persona = {
    
    nombre: "Juan",
    apellido: "Perez",
    email: "jperez@mail.com",
    edad: 28, 
    nombreCompleto: function(){}
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);

console.log(persona);



//Agregar métodos a los objetos
let persona2 = {
    
    nombre: "Juan",
    apellido: "Perez",

    nombreCompleto: function(){ return this.nombre + " " + this.apellido}
}

console.log(persona2.nombreCompleto());



//Otra forma de crear un objeto
let persona3 = new Object();
persona3.nombre = "Carlos";
persona3.direccion = "Saturno 15";
persona3.tel = "55443322";


console.log(persona3.tel);


//Acceder a las propiedades de un objeto
console.log( persona.apellido )
console.log( persona["apellido"] );

//for in
for( nombrePropiedad in persona){
    console.log( nombrePropiedad );
    console.log( persona[nombrePropiedad]);
}


//Agregar y eliminar propiedades 

//Agregar
persona.tel = "55443322";
console.log(persona);

//Eliminar
delete persona.tel;
console.log(persona)


//Imprimir objetos

    //Concatenar cada valor de cada prioridad
console.log(persona.nombre + " " + persona.apellido);

    //Iterar con for in
for(  nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

    //Método values()
let personaArray = Object.values(persona);
console.log(personaArray);

    //Método JSON
let personaString = JSON.stringify(persona);
console.log(personaString);


//Método Get()
let persona4 = {
    
    nombre: "Juan",
    apellido: "Perez",

    get nombreCompleto(){ 
        return this.nombre + " " + this.apellido
    }
}

console.log(persona4.nombreCompleto);


//Método set()

let persona5 = {
    
    nombre: "Juan",
    apellido: "Perez",
    idioma: "es",
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(idioma){
        this.idioma = idioma.toUpperCase();
    },
    get nombreCompleto(){ 
        return this.nombre + " " + this.apellido
    }
}
console.log(persona5.lang);
persona5.lang = "en";
console.log(persona5.lang);
console.log(persona5);



//Constructores 

//Método constructor de tipo persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padre = new Persona("Juan", "Perez", "jperez@mail.com");
console.log(padre);

let madre = new Persona("Laura", "Quintero", "lquintero@mail.com");
console.log(madre);

padre.nombre = "Carlos";
console.log(padre);
console.log(madre);


//Agregar método al método constructor
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){return this.nombre + " " + this.apellido}
}

let padre2 = new Persona("Juan", "Perez", "jperez@mail.com");
console.log(padre2.nombreCompleto());



//Formas de crear "objetos" (formales y simplificadas)
let miObjeto1 = new Object();
let miObjeto2 = {};

let miCadena1 = new  String("Hola");
let miCadena2 = "Hola";

let miNumero1 = new Number(1);
let miNumero2 = 1;

let miBoolean1 = new Boolean(false);
let miBoolean2 = false;

let miArreglo1 = new Array();
let miArreglo2 = [];

let miFuncion1 = new Function();
let miFuncion2 = function(){};



//Uso de Prototype
function Persona3(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){return this.nombre + " " + this.apellido}
}
Persona3.prototype.tel = "44332211";

let padre3 = new Persona3("Juan", "Perez", "jperez@mail.com");
padre3.tel = "55443322";
console.log(padre3.tel);

let madre3 = new Persona3("Laura", "Quintero", "lquintero@mail.com");
console.log(madre3.tel);



//Uso del método Call
let persona1 = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto: function(titulo, tel){
        return titulo + ": " + this.nombre + " " + this.apellido + ", " + tel;
    }
}

let persona2_ = {
    nombre: "Carlos",
    apellido: "Lara"
}

console.log(persona1.nombreCompleto("Lic", "44141513413"));
console.log(persona1.nombreCompleto.call(persona2_, "Ing", "5544332211"));



//Método Apply (se tiene que pasar un arreglo con los datos)

console.log(persona1.nombreCompleto("Lic", "44141513413"));

let arreglo = ["Ing", "14312132"];
console.log(persona1.nombreCompleto.apply(persona2_, arreglo));