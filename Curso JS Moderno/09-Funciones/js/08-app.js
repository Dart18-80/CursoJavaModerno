pestaña = "App 8";
console.log(pestaña);


function Dividir(x , y)
{
    return x/y; 
}

const resultado = Dividir( 4 , 2 );

console.log(resultado);

let total = 0;

function AgregarCarrito (precio)
{
    return total +=precio;
}

function CalcularImpuestos (valor){
    return total * 1.12;
}

total = AgregarCarrito(40);
total = AgregarCarrito(50);
total = AgregarCarrito(60);

const totalPagar = CalcularImpuestos(total);

console.log(`El total a pagar es de ${totalPagar}`);

console.log(total);
