pestaña = 'Pestaña 3';
console.log(pestaña);

const juego = new Map();

juego.set('nombre', 'futbol');
juego.set('tipo', 'contacto');
juego.set('MaxJugadores', 22);

console.log(juego);

console.log(juego.size);

console.log(juego.has('nombre2'));

console.log(juego.get('nombre'));

juego.delete('tipo');

console.log(juego.has('tipo'));

console.log(juego.get('tipo'));

juego.clear();

console.log(juego);

const paciente = new Map([['nombre', 'Juan'], ['cuarto','Quirofano']]);

paciente.set('dr', 'dr Asignado');
paciente.set('nombre', 'Diego');

console.log(paciente);

paciente.forEach((datos, index) =>{
    console.log(index);
    console.log(datos);
});