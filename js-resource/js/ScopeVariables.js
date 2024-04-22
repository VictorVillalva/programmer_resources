// Scope - Alcance de una variable

const precio = 300; // Global - Puede entrar en un if pero no salir

function unaFuncion(){
    const precio = 600; // Dentro de una Funcion
    
    console.log(precio);
}

if(true){
    console.log(precio)
}

console.log(precio); // Toma el global

unaFuncion();