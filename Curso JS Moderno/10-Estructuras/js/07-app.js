pestaña = "App 7";
console.log(pestaña);

const efectivo = 300;
const credito = 400;
const disponible = 400+300;
const gasto = 600;

if(efectivo > gasto || credito > gasto || disponible > gasto)
{
    console.log('Si podemos pagar');
}
else 
{
    console.log('No se puede pagar');
}
