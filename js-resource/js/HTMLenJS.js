//Creacion de codgio HTML en JS

const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.querySelector('.nombre').value;
    const password = document.querySelector('.password').value;

    const alertaPrevia = document.querySelector('.alerta');
    if(alertaPrevia){ //esto servira para que no vuelva a repertir la alerta y ponerla abajo
        alertaPrevia.remove();
    }
    
    const alerta = document.createElement('DIV') //Es mejor poner en mayus por que asi es como regresa cuando ponemos tagname
    // alerta.id = 'hola';
    alerta.classList.add('alerta') // agrega clases


    if(nombre === '' || password === ''){
        alerta.textContent = 'todos los campos son obligatorios';
        alerta.classList.add('error');
    } else {
        alerta.textContent = 'Todo bien ...';
        alerta.classList.add('exito');
    }

    // console.log(alerta);

    formulario.appendChild(alerta);
})