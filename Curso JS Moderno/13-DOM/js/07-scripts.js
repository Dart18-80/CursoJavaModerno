pestaña = "App 7";
console.log(pestaña);

const Encabezado2 = document.querySelector('h1');
console.log(Encabezado2.style);

Encabezado2.style.backgroundColor = 'red';
Encabezado2.style.fontFamily = 'Arial';
Encabezado2.style.textTransform = 'uppercase';

const cart = document.querySelector('.card');
cart.classList.add('nueva-clase','segunda-clase');
console.log(cart.classList);
cart.classList.remove('nueva-clase');