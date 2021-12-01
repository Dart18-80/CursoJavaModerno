const cliente = {
    nombre: 'Juan',
    saldo: 500,
}

console.log(cliente);

console.log(typeof cliente);

function Cliente(nombre, saldo){
    this.nombre = nombre; 
    this.saldo = saldo;
}

const Juan = new Cliente('Juan', 500);

console.log(Juan);