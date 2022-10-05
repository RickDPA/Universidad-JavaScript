
//Uso y manejo de static

class Persona{

    //Definición de atributos static
    static contadorObjetosPersona = 0;//atributo de la clase

    //Definición de atributos NO static
    email = "Valor default email";//atributo de los objetos

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        
        Persona.contadorObjetosPersona++;
        console.log("Se incrementa contador: " + Persona.contadorObjetosPersona);
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }    


    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }   

    nombreCompleto(){
        return this._nombre + " " + this._apellido;
    }

    toString(){
        return this.nombreCompleto();
    }

    //Métodos static
    static saludar(){
        console.log("Saludo desde método static clase Persona");
    }

    static saludar2(persona){
        console.log(persona.nombre);
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); 
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    nombreCompleto(){
        return this._nombre + " " + this._apellido + ", " + this._departamento;

    }
}

let persona1 = new Persona("Juan", "Perez");
let empleado1 = new Empleado("Ricardo", "Penagos", "Software");

//persona1.saludar(); No es posible llamar un método static desde un objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar(); // El método static también se hereda
Empleado.saludar2(empleado1);


//console.log(persona1.contadorObjetosPersona); igual que con los métodos, un objeto no puede llamar a una variable static
console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);


//Manejo de atributos NO static
console.log(persona1.email);
console.log(empleado1.email);
console.log(Persona.email); //este atributo no funciona con la clase




//Ejemplo del uso de Static

class Persona2{
 
    static contadorObjetosPersona = 0;

    //Creación de constantes static (solo lectura, no modificable)
    static get MAX_OBJ(){
        return 3;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona2.contadorObjetosPersona < Persona2.MAX_OBJ){
            this.idPersona = ++Persona2.contadorObjetosPersona;
        }else{
            console.log("Se han creado el máximo de objetos permitidos");
        }
       
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }    


    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }   

    nombreCompleto(){
        return this.idPersona + ". " + this._nombre + " " + this._apellido;
    }

    toString(){
        return this.nombreCompleto();
    }

    static saludar(){
        console.log("Saludo desde método static clase Persona");
    }

    static saludar2(persona){
        console.log(persona.nombre);
    }
}

class Empleado2 extends Persona2{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); 
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    nombreCompleto(){
        return super.nombreCompleto() + ", " + this._departamento;

    }
}

let persona2 = new Persona2("Juan", "Perez");
let empleado2 = new Empleado2("Ricardo", "Penagos", "software");


console.log(persona2.toString());
console.log(empleado2.toString());
console.log(Persona2.contadorObjetosPersona);

//Manejo de constantes static
console.log(Persona2.MAX_OBJ);
Persona2.MAX_OBJ = 10; //MAX_OBJ funciona como variable constante porque no se puede sobreescribir al no haber método set
console.log(Persona2.MAX_OBJ);

let persona2_1 = new Persona2("Laura", "Quintero");
let persona2_2 = new Persona2("Karla", "Ramirez");

console.log(persona2_1.toString());
console.log(persona2_2.toString());//al ser el cuarto objeto creado no se le asigna ID


