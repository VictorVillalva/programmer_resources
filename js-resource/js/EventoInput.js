// Eventos de DOM - Inputs

const inputNombre = document.querySelector('.nombre');
// inputNombre.placeholder = 'Modificado desde el JS'; //Puedo modificar desde JS los elementos
inputNombre.addEventListener('input', function(event){ // e o event
    console.log('Escribiendo en el INPUT');
    console.log(event.target.value); //target es donde estamos escribiendo - Detectar lo que el usuario escribe

})

const inputPassword = document.querySelector('.password');
inputPassword.addEventListener('input', function(){
    inputPassword.type = 'text';

    setTimeout(() => { //Hacer que el input type texto se pase a ser password
        inputPassword.type = 'password';
    }, 1000);
})

//------------------------------
// inputNombre.addEventListener('keydown', function(){
//     console.log('Escribiendo en el INPUT')
// })

// inputNombre.addEventListener('keyup', function(){
//     console.log('Escribiendo en el INPUT')
// })