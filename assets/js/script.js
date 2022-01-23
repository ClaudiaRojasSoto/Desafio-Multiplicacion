let valorNum = 0;

// Función ES6
let solicitarNumero = () => {
    valorNum = parseInt(prompt('Ingrese un valor numerico entre 1 y 20.'));
    // verifica que el valor numérico indicado cumpla la condición (estar entre 1 y 20)
    if( valorNum > 0 && valorNum <= 20){
        return true;
    }else{
        return false;
    }
}

// Multiplicación (tabla)
if(solicitarNumero()){
    
    for (let i = 1; i <= valorNum; i++) {
        let resultado = i * valorNum;
        console.log(`${i} x ${valorNum} = ${resultado}`);
    }

    // para Factorial con ciclo for anidado
    for (let i = 1; i <= valorNum; i++) {
        let res = 1;
        for (let j = 1; j<= i; j++){

            res = res * j
        }
        console.log(`El factorial de ${i} es: ${res} `);
    }

    

}else{
    alert("El numero ingresado no es valido.");
}