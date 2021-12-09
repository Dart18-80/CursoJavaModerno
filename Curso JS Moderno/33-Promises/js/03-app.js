const promise = new Promise((resolve, reject) => {

    const descuento = true;

    if(descuento){
        resolve('Descuento Aplicado');
    }
    else{
        reject('No se aplico el descuento');
    }
})


promise
    .then(resultado =>descuento(resultado))
    .catch(error => console.log(error));

//Hay 3 valores prosibles para el promise 

//Fulfilled - El promise se cumplio 
//Reject - El promise no se cumplio 
//Pending - Aun no se cumplido, y tampoco fue rechazado

function descuento(mensaje){
    console.log(mensaje);
}