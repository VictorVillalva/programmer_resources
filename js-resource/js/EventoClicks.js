// Eventos del DOM - clicks

const heading = document.querySelector('.heading');
//---------------
// heading.addEventListener('click', function(){ //Asi con function
//     console.log('diste click en el heading');
// })
//-----------------
heading.addEventListener('click', () => { // o en flecha - click es el evento
    console.log('diste click en el heading');
    heading.textContent = 'Cambio por le diste click brou' //Espera a que suceda el evento
})
//-------------------
// heading.addEventListener('click', clickHeading)
// function clickHeading(){
//     console.log('DIste click en el heading')
// }
//----------------
// const clickHeading = function(){
//     console.log('Diste click en el heading');
// }
// const clickHeading = () => {
//     console.log('Diste click en el heading');
// }
// heading.addEventListener('click', clickHeading) //agregas una funcion sin los ()
//------------------

const enlaces = document.querySelectorAll('.navegacion a');

enlaces.forEach( enlaces => { //Debemos itenerar los enlaces por que pusimos querySelectorAll
    enlaces.addEventListener('click', () => {
        console.log('diste click en un enlace');
        enlaces.textContent = 'Cambiaste un enlaces al darte click'
    })
})