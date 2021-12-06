pestaña = 'Pestaña 4';
console.log(pestaña);

const videoJuego = {
    idJuego: 10,
}

const weakMap2 = new WeakMap();

weakMap2.set(videoJuego, 'Mario');

console.log(weakMap2.has(videoJuego));

console.log(weakMap2.get(videoJuego));

console.log(weakMap2.delete(videoJuego));

