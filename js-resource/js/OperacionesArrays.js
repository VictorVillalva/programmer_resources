//Operacione de Arreglo

const tecnologias = ['HTML','React','JavaScript','CSS','Node.js']

//Añadir elementos al Array
// tecnologias.push('GraphQL'); //Añade al final de array
// tecnologias.unshift('Angular'); //Añade al principio del array

// const nuevoArreglo = [...tecnologias, 'Vue']; //Añade al final de array
// const nuevoArreglo = ['GraphQL', ...tecnologias]; //Añade al principio del array

//Eliminar elementos del array
// tecnologias.pop(); //Elimina el ultimo elemento del array
// tecnologias.shift();  //ELimina el primer elemento del array
// tecnologias.splice(2,1) //Elimina de una posicion en especifica

// const nuevoArreglo =  tecnologias.filter( function(tech) {
//     return tech  === 'HTML';
    // console.log('desde filter');
// })


//Reemplazar del array
// tecnologias[0] = 'GraphQL';

// const nuevoArreglo = tecnologias.map( function(tech) {
//     if(tech === 'HTML'){
//         return 'GraphQL';
//     }else{
//         return tech;
//     }
// });



console.table(tecnologias); //Muestra la información en una tabla