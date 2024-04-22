// Fetch API
const url = 'https://jsonplaceholder.typicode.com/comments';

const consultarAPI = () => {
    fetch(url)
    .then((respuesta) => {
        // console.log('Haciendo fetch...'); 
        // console.log(respuesta);
        return respuesta.json();
    }) //Promise-Promesas
    .then((resultado) => {
        console.log('Resultado casi listo');
        console.log(resultado);
        resultado.forEach( (comentario) => {
            console.log(comentario)
        })
    })
}

consultarAPI();
