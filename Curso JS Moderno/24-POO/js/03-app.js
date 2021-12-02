class Cliente{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion (){
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`
    }
    static bienvenida(){
        return `Bienvenida al cajero`
    }
}

//Herencia
class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo);
        this.telefono = telefono; 
        this.categoria = categoria;
    }
    static bienvenida(){
        return `Bienvenida al cajero de la empresa`
    }
}

const Juan = new Cliente('Juan',400);
const Claro  = new Empresa('Claro',500,45281920,'Empresa de telefonia');

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());