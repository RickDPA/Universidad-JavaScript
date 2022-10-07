//MANEJO TRY-CATCH
'use strict'

//Try indica que se realizará un bloque de código 
try{
    // x = 10;
    let x = 10;

    //Arrojar tus propios errores para validaciones
    throw "Mi error";

//Catch se manda a llamar si sucede algún erorr
}catch(error){
    console.log(error);
//Finally se ejecutará siempre, haya o no errores
}finally{
    console.log("Termina la revisión de errores");
}


console.log("Continuamos...");


//
let resultado = "as";

try{
    if(isNaN(resultado)) throw "No es un número";
    else if (resultado === "") throw "Es cadena vacía"
    else if (resultado >= 0) throw "Valor positivo";
    else if (resultado < 0 ) throw "Valor negativo";

}catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}finally{
    console.log("Termina revisión de errores");
}