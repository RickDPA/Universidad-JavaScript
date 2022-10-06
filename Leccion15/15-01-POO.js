
//Sobreescritura
class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }


    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`;
    }

}


class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }
    
    
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this._departamento}`;
    }

}

let empleado1 = new Empleado('Juan', 3000);
console.log( empleado1.obtenerDetalles() );

let gerente1 = new Gerente('Carlos', 5000, 'Sistemas');
console.log( gerente1.obtenerDetalles() );


//Polimorfismo
//Una función fuera de cualquier clase que podrá llamar a un método dependiendo el tipo 
//...que se agrega
function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
}

//usamos la función para imprimir los detalles según sea la clase del objeto agregado
imprimir(empleado1);
imprimir(gerente1);



//instanceOf
//creamos una función similar a la de polimorfismo
function determinarTipo(tipo){

    if(tipo instanceof Gerente){
        console.log("Es un objeto de tipo Gerente");
    }else if(tipo instanceof Empleado){
        console.log("Es un objeto de tipo Empleado")
    }else if(tipo instanceof Object){
        console.log("Es un objeto de tipo Object")
    }
}

determinarTipo(empleado1);
determinarTipo(gerente1);