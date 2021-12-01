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


const mazda = new carro('Mazda', 60000);
mazda.tipoCarro();
console.log(mazda.tipoCarro());
console.log(mazda.CarroNombreSaldo());
mazda.retiraSaldo(5000);
console.log(mazda);
