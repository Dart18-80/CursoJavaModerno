pestaña = "App 8";
console.log(pestaña);

for(let pendie in pendientes)
{
    console.log(pendie);
}

const automovil = {
    modelo: 'Camaro',
    year: 1969,
    motor: '6.0'
}

for(let propiedades in automovil)
{
    console.log(propiedades);
}

for(let [llave, valor] of Object.defineProperties(automovil)){
    console.log(valor);
}

for(let [llave, valor] of Object.entries(automovil)){
    console.log(valor);
    console.log(llave);
}