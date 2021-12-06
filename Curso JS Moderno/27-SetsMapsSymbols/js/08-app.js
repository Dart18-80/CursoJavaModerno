pestaña = 'Pestaña 8';
console.log(pestaña);

const ciudades = ['Londres','New York', 'Madrid', 'Paris'];
const ordenes = new Set([123,231,131,102]);
const datos = new Map();

datos.set('nombre', 'Diego');
datos.set('profesion', 'Ingeniero en Sistemas');

//Entries iterator retorna llave y valor
for(let entry of ciudades.entries()){
    console.log(entry);
}

for(let entry of ordenes.entries()){
    console.log(entry);
}

for(let entry of datos.entries()){
    console.log(entry);
}

//Values Iterador retorna solo el valor 

for(let value of ciudades.values()){
    console.log(value);
}

for(let value of ordenes.values()){
    console.log(value);
}

for(let value of datos.values()){
    console.log(value);
}

//Key Iterator itera solo las llaves 

for(let key of ciudades.keys()){
    console.log(key);
}

for(let key of ordenes.keys()){
    console.log(key);
}

for(let key of datos.keys()){
    console.log(key);
}

//Defaeult
for(let ciudad of ciudades){
    console.log(ciudad);
}

for(let orden of ordenes){
    console.log(orden);
}

for(let dato of datos){
    console.log(dato);
}