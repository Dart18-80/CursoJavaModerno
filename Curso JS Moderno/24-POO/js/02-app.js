//Forma de declarar clases
//Class Expresion 
class Cliente{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion (){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`
    }
}

//Class Declaration
const Cliente2 = class{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion (){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`
    }
}

const Juan = new Cliente('Juan',400);
const Pedro = new Cliente2('Pedro',500);

console.log(Juan.mostrarInformacion());
console.log(Pedro.mostrarInformacion());