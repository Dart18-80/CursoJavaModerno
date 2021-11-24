pestaña = "App 5";
console.log(pestaña);

const metodoPago = "Efectivo";

switch(metodoPago)
{
    case 'Efectivo':
        console.log("Pagaste con Efectivo");
        break;
    case 'Cheque':
        console.log("Pagaste con Chequera");
        break;
    case 'Tarjeta':
        console.log("Pagaste con Tarjeta");
        break;
    default:
        console.log("No selecciono ninguno de los metodos de pago");
}

