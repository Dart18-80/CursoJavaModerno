pestaña = 'Pestaña 7';
console.log(pestaña);

function *crearGenerador(){
    yield 1;
    yield 'Diego';
    yield 3+3;
    yield true;
}

const iterador = crearGenerador();
/*
console.log(iterador);

console.log(iterador.next());
console.log(iterador.next().value);
console.log(iterador.next());
//console.log(iterador.next().done);
console.log(iterador.next().value);
console.log(iterador.next());
*/

function *generadorCanasta(canasta){
    for(let i = 0; i < canasta.length; i++){
        yield canasta[i];
    }
}

const iterador2 = generadorCanasta(canasta);

console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());
console.log(iterador2.next());


