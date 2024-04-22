// Eventos del DOM - Submit

const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', (event) => {
    event.preventDefault(); //Previene la accion por default - sirve para validacion

    const nombre = document.querySelector('.nombre').value; //Puedo recortar el codigo con ese .value
    // console.log(nombre.value) // o tambien puede ser asi si no agrego el value
    console.log(nombre)
    //-----------------------
    const password = document.querySelector('.password').value;
    console.log(password)

    if(nombre === '' || password === ''){
        console.log('Todos los campos son obligatorios')
    } else { 
        console.log('Todo esta perfecto, enviando...')
    }



    console.log('enviaste al formulario al dar submit')
})
