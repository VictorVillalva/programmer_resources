//Manipular elementos HTML con JS

const heading = document.querySelector('.heading');
heading.textContent = 'Aqui modifico el heading';
console.log(heading.textContent);

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'aqui modifico'; //Value sirve para agregar info

const enlaces = document.querySelectorAll('.navegacion a');
enlaces.forEach(enlaces => enlaces.textContent = 'nueva modificacion aqui');
