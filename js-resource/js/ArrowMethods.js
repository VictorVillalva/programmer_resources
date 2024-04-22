// 
const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React']
const numeros = [10,20,30]

let nuevoArray;

// .map
// const nuevoArray = tecnologias.map( (tech) => {
//     if(tech === 'HTML'){
//         return 'GraphQL';
//     }else {
//         return tech;
//     }
// })

// console.log(nuevoArray);


//Filter
const nuevoArray2 = tecnologias.filter( tech => tech !== 'React')

//Comprar si un elemento existe en el array
// const resultado = tecnologias.includes('Angular');

// Some - Te dice si al menos un elemento cumple con la condicion
// const resultado = numeros.some( numero => numero > 15);

//Find - Devuelve el primer elemento que cumpla la condicion
// const resultado = numeros.find(numero => numero > 5);

//Every - Retorna true o false si todos cumplen la condicion
// const resultado = numeros.every( numero => numero > 15);

//Reduce - Va acumulando en el total / Util en un carrito de compras
// const resultado = numeros.reduce( (total, numero) => numero + total, 100)

//Filter - Crea un nuevo array en base a una condicion
// const resultado = tecnologias.filter( tech => tech === 'CSS');
// const resultado = numeros.filter( numero => numero > 15);
// console.log(resultado);

tecnologias.forEach( tech => console.log(tech))

const arrayMap = tecnologias.map( tech => tech);

console.log(arrayMap);