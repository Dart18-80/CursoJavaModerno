let pestaña = 'Pestaña 2';
console.log(pestaña);

const weakset = new WeakSet();

//Sintaxis valida con WeakSet 
const cliente = {
    nombre: 'Juan', 
    edad:20,
}

//Sintaxis invalida con WeakSet 
const nombre = 'Juan';

weakset.add(cliente);

console.log(weakset);