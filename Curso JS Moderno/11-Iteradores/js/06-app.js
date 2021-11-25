pestaña = "App 6";
console.log(pestaña);

const pendientes = ['Tarea', 'Comer', 'Proyectos', 'Estudiar JavaScript'];

pendientes.forEach( (pendiente, indice)  => {
    console.log(`${indice} : ${pendiente}`);
})

const nuevoArreglo = canasta.forEach( producto => console.log(producto.nombre) )

const nuevoArreglo2 = canasta.map( producto => console.log(producto.nombre) )

console.table(nuevoArreglo);
console.table(nuevoArreglo2);