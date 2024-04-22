//Funciones - Arrow Fuctions

const sumar = function(){
    console.log(numero + numero2)
}

const sumar1 = (numero = 0, numero2 = 0) => { //Adentro de "()" van los parametros
    return(numero + numero2)
    // console.log(numero + numero2)
}

const sumar2 = (numero3 = 0, numero4 = 0) => numero3 + numero4; // aqui si es una sola linea de codigo

const sumar3 = numero3 => numero3 + 30; // aqui cuando es un unico parametro

const resultado = sumar1(50,20);
console.log(resultado);

// sumar1(40,50);

const sumarArrow = () => 2+2;

const resultado2 = sumarArrow();
console.log(resultado);