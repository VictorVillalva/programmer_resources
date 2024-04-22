// Comparacion y operador estricto

const numero1 = 20;
const numero2 = "20";

/**
 *  == (Comparacion pero no es estricto)
 *  === (Comparacion estricta -  revisa valor y tipo de dato)
 */

if(numero1 === numero2){
    console.log('Si son iguales');
} else {
    console.log('No no soy iguales');
}

const autenticado = true;
if(autenticado){
    console.log('Si esta autenticado')
}