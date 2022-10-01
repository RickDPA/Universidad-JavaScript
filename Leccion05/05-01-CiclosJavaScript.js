//CICLOS (WHILE, DO-WHILE, FOR...)

//WHILE
let contador = 0;

while(contador < 3){
    console.log(contador);
    contador++;
}
console.log("Fin ciclo while");



//DO-WHILE
let contador2 = 0;

do{
    console.log(contador2);
    contador2++;
}while(contador2 < 3);
console.log("Fin ciclo do-while");



//FOR
for(let contador = 0; contador < 3; contador++){
    console.log(contador);
}
console.log("Fin ciclo for");



//Break en ciclos
for(let contador = 0; contador <= 10; contador++){
    if(contador % 2 == 0){
        console.log(contador);
        break;

    }
}
console.log("Fin ciclo for usando un break");



//Continue en ciclos
for(let contador = 0; contador <= 10; contador++){
    if(contador % 2 != 0){
        continue;
    }
    console.log(contador);
}
console.log("Fin ciclo for usando continue");



//Etiquetas (label)
inicio:
for(let contador = 0; contador <= 10; contador++){
    if(contador % 2 != 0){
        continue inicio;
    }
    console.log(contador);
}
console.log("Fin ciclo for usando etiquetas");