pestaña = "App 2";
console.log(pestaña);

for(let i = 0; i < canasta.length; i++)
{
    if(canasta[i].descuento)
    {
        console.log(`Este articulo tiene descuento ${canasta[i].nombre}`);
        continue;
    }
    console.log(canasta[i].nombre);
}