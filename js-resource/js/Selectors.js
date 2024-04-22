//Selector de DOM

//Puedo llamarlo .clase, #id, h2 comoe etiqueta
// querySelector - Te va retornar un elemento - Solamente selecciona un elemento
const heading = document.querySelector('h2')

// console.log(heading.textContent);
// console.log(heading.classList);
// console.log(heading.id);
// console.log(heading.tagName);

// querySelectorAll - Te va traer todos los elementos que este en el selector
const enlaces = document.querySelectorAll('.navegacion');
//Se tiene que iterar en ellos con un forEach o map

console.log(enlaces);

