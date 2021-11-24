pestaña = "App 5";
console.log(pestaña);

const usuario = true; 
const puedePagar = false;

if(usuario && puedePagar)
{
    console.log('Si puede pagar');
}
else if(!usuario && !puedePagar)
{
    console.log('No ha iniciado sesion y tampoco tiene fondos suficientes');
}
else if(!usuario)
{
    console.log('No se ha iniciado sesion para comprar');
}
else if (!puedePagar)
{
    console.log('No tiene fondos suficientes');
}