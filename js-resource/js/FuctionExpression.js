//Funciones - Fuction Expression

//Este es Fuction Declaration
function sumar(numero=0 , numero2=0){
    console.log(numero + numero2)
}

//Este es Fuction Expression
const sumar2 = function(numero,numero2){
    console.log(numero+numero2)
}

sumar2(10,20);

const sumar3 = function(numero = 0,numero2 = 0){
    return numero+numero2;
}

const resultado = sumar3(20,30);
console.log(resultado);