export const nombreCliente = 'Juan';
export const valor = 200;


export function mostrarInformacion(nombre, ahorro){
    return `Cliente con nombre ${nombre} con un ahorro de ${ahorro}`;
}

export function tieneSaldo(ahorro){
    if(ahorro <= 0){
        return 'No tiene saldo';
    }
    else{
        return 'Si cuenta con saldo';
    }
}

export class Cliente {
    constructor(nombre, ahorro){
        this.nombre = nombre; 
        this.ahorro = ahorro;
    }
    mostrarInformacionC(){
        return `Cliente con nombre ${this.nombre} con un ahorro de ${this.ahorro}`;
    }
}

//Solo se puede exportar un default 
export default function NuevaFucion(){
    console.log('Este es el export por Default');
}