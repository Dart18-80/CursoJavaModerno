Numero = "App 05";
console.log(Numero);

const dinero = 'El dolar se representa como signo';

console.log(dinero);

console.log(dinero.replace('signo','$'));
console.log(dinero.replace('dolar','quetzales guatemaltecos'));

//Cortar cadenas de texto

console.log(dinero.slice(0,10));
console.log(dinero.slice(6));
console.log(dinero.slice(2,1));

//Alternativa para cortar texto, esta mejor puesto que siempre va a cortar la cadena

console.log(dinero.substring(0,10));
console.log(dinero.substring(2,1));

const nombre = "Diego";
console.log(nombre.substring(0,1));
