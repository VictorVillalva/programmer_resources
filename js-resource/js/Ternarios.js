//Ternarios
const autenticado = true;

!autenticado ? 
    console.log('Si autenticado') :
    console.log('No autenticado')


//Doble ternario
const saldo = 600;
const pagar = 500;
const tarjeta = true;

saldo > pagar ? 
    console.log('puedes pagar con saldo') : 
    console.log('No, no puedes pagar');