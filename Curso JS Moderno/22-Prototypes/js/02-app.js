function Juegos (nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

const accion = new Juegos('Mario Kart', 500);

function formatearJuego (juego){
    const {nombre, precio} = juego;
    return `El juego: ${nombre} tiene un valor de ${precio}`
}

function formatearEmpresa(empresa){
    const {nombre, saldo, categoria} = empresa;
    return `La empresa: ${nombre} tiene un valor de ${saldo} y esta en la categoria ${categoria}`
}

console.log(formatearJuego(accion));

function Empresa(nombre, saldo, categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCD = new Empresa('Empresa de Diego', 400, 'Venta de Juegos');

console.log(formatearEmpresa(CCD));