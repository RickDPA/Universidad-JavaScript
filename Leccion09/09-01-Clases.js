
//CLASES EN JAVA
class Persona{

    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}


let persona01 = new Persona("Juan", "Perez");
console.log(persona01);

let persona02 = new Persona("Carlos", "Lara");
console.log(persona02);

//Método get y set en clases
class Persona1{

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
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
}
//get
let persona1 = new Persona1("Juan", "Perez");
console.log(persona1.nombre);
//set
persona1.nombre = "Juan Carlos";
console.log(persona1.nombre);



//Herencia (usando la clase "Persona1" previamente definida)

class Empleado extends Persona1{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); // Llamada a la clase padre por medio de "super()" dentro del constructor
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    //Sobreescritura de métodos
    nombreCompleto(){
        
        //se puede usar "super()" dentro de un método para hacer un llamado a otro aunque se esté sobreescribiendo
        //return super.nombreCompleto() + " " + this._departamento;

        return this._nombre + " " + this._apellido + ", " + this._departamento;

    }
}

let empleado1 = new Empleado("Maria", "Jimenez", "Sistemas");
console.log(empleado1);
console.log(empleado1.nombre);

//print de método sobreescrito 
console.log(empleado1.nombreCompleto());




//Clase Object (si no se especifíca, JavaScript extiende todas las clases de la clase Object
//por ende, Object es la clase padre de todas las clases)


//sobrescritura y polimorifsmo
//Aquel método que hace un llamado a otro que esté sobreescrito utilizará el de la clase que se especifíca
//al crear la variable, en caso de no tener se utilizará el de la clase padre

console.log(persona1.toString());
console.log(empleado1.toString());// Se agrega el departameto



