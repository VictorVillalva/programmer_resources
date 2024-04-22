// 
function sumar(numero = 0, numero2 = 0) { //Parametros
    return numero + numero2;
}  

 const resultado = sumar(10,30);
 console.log(resultado);

 //Retornar Arreglos-Arrays
 function sumar2(numero = 0, numero2 = 0) { //Parametros
    return [numero+numero2, 'Hola Mundo'];
}  

 const [resultado1, holaMundo] = sumar2(10,30);
 console.log(resultado1);
 console.log(holaMundo);

 //Retornar Objetos
 function sumar3(numero = 0, numero2 = 0) { //Parametros
    return {
        resultado3: numero + numero2,
        mensaje: 'Hola Mundo'
    };
} 

const {resultado3, mensaje} = sumar3(100,30);

console.log(resultado3);
console.log(mensaje);

