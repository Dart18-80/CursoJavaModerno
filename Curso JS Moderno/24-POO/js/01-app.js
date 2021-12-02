//Forma de declarar clases
//Class Expresion 
class Cliente{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

}

//Class Declaration
const Cliente2 = class{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const Juan = new Cliente('Juan',400);
const Pedro = new Cliente2('Pedro',500);

console.log(Juan);
console.log(Pedro);