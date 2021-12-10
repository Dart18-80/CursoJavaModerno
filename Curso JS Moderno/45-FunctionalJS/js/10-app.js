const obtenerNombre = info =>({
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`);
    }
});

const guardarEmail = info =>({
    agregarEmail(email){
        console.log(`Guardando Email en: ${info.nombre}`)
        info.email = email;
    }
});

const obtenerEmail = info =>({
    mostrarEmail(){
        console.log(`Email: ${info.email}`);
    }
});

const obtenerEmpresa = info =>({
    mostrarEmpresa(){
        console.log(`Empresa: ${info.empresa}`);
    }
});

const obtenerPuesto = info =>({
    mostrarPuesto(){
        console.log(`Puesto: ${info.puesto}`);
    }
});

function Cliente(nombre, email, empresa){
    let info = {
        nombre, 
        email, 
        empresa,
    }

    return Object.assign(
        info, 
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info),
    )
}

function Empleado(nombre, email, puesto){
    let info = {
        nombre, 
        email, 
        puesto,
    }

    return Object.assign(
        info, 
        obtenerNombre(info),
        guardarEmail(info), 
        obtenerEmail(info),
        obtenerPuesto(info),
    )
}

const cliente = Cliente('Diego', null,'ADS');
cliente.mostrarNombre();
cliente.agregarEmail('dieal@gmail.com');
cliente.mostrarEmail();
cliente.mostrarEmpresa();

console.log('===================');

const empleado = Empleado('Luis', null, 'Programador');
empleado.mostrarNombre();
empleado.agregarEmail('Luis@gmail.com');
empleado.mostrarEmail();
empleado.mostrarPuesto();