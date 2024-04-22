// Iteradores de JS 
const tecnologias = ['HTML','React','JavaScript','CSS','Node.js']

// forEach - Acceder a cada elemento del array
// -Listar y Accer a los elementos
const arrayForeach = tecnologias.forEach( function(tech){ //En el "()" puede ir el nombre que sea
    // console.log(tech);
    return tech; //Retorna los valores que vas intirerando en ellos
});

// map - Permite crear un nuevo arreglo
const arrayMap = tecnologias.map( function(tech){ //En el "()" puede ir el nombre que sea
    // console.log(tech);
    return tech; //Retorna los valores que vas intirerando en ellos
});

console.log(arrayForeach);
console.log(arrayMap);