pestaña = 'Pestaña 5';
console.log(pestaña);


const sym = Symbol();

const sym2 = Symbol();

if(sym === sym2){
    console.log('Son iguales');
}
else{
    console.log('No son iguales');
}

//Los symbol nunca son iguales

const names = Symbol();
const apellidos = Symbol();

const person = {};

person[names] = 'Juan'; 
person[apellidos] = 'Ruiz';
person.tipoCliente = 'Premium';
person.saldo = 500;

console.log(person);

console.log(person[names]);

//Las propiedades symbol no son iterables
for(let i in person){
    console.log(i);
}

//definir una descripcion del symbol 

const nombreCliente = Symbol('Nombre del Cliente');
const cliente2 = {};

cliente2[nombreCliente] = 'Diego';

console.log(cliente2);






