function descargarNuevosClientes(){
    return new Promise(resolve =>{
        console.log('Descargando clientes...');
        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        },5000);
    })
}

function descargarNuevosPedidos(){
    return new Promise( resolve =>{
        console.log('Descargando pedidos...');
        setTimeout(() => {
            resolve('Los pedidos fueron descargados');
        },3000);
    })
}

const app = async () =>{
    try {
        //Espera que termine una para ejecutar la otra funcion
        /*const clientes = await descargarNuevosClientes();
        console.log(clientes);

        const pedidos = await descargarNuevosPedidos();
        console.log(pedidos);*/
        
        //Se ejecutan al mismo tiempo 
        const respuesta = await Promise.all([descargarNuevosPedidos(), descargarNuevosClientes()]);
        console.log(respuesta[0]);
        console.log(respuesta[1]);
    } catch (error) {
        console.log(error);
    }
}

app();