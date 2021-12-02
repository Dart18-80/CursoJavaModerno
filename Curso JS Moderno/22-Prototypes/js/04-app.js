function carro(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

carro.prototype.tipoCarro = function(){
    let tipo; 

    if(this.saldo > 50000){
        tipo = 'Gold';
    }else if(this.saldo > 20000){
        tipo = 'Premium';
    }else{
        tipo = 'Normal';
    }
    return tipo;
}

carro.prototype.CarroNombreSaldo = function(){
    return `Nombre: ${this.nombre} Saldo: ${this.saldo} Tipo Carro: ${this.tipoCarro()}`
}

carro.prototype.retiraSaldo = function(retira){
    this.saldo -= retira;
}

function Bus(nombre, saldo, capacidad){
    carro.call(this, nombre, saldo);
    this.capacidad = capacidad;
}

Bus.prototype = Object.create( carro.prototype);
Bus.prototype.constructor = carro;

const mazda = new carro('Mazda', 60000);
const transmetro = new Bus('Transmetro', 80000, 500);

console.log(transmetro);
