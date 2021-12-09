const paises = [];

function nuevoPais (pais,callback){
    paises.push(pais);
    console.log(`Se agrego el pais ${pais}`);
    callback();
}

function mostrarPaises(){
    console.log(paises);
}

function iniciarCallbackHell(){
    setTimeout(() =>{
        nuevoPais('Alemania',mostrarPaises);
        setTimeout(() =>{
            nuevoPais('Francia',mostrarPaises);
            setTimeout(() =>{
                nuevoPais('Brasil',mostrarPaises);
            },3000);
        },3000);
    },3000);
}

iniciarCallbackHell();