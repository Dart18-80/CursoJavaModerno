const nombre = localStorage.getItem('nombre');
console.log(nombre);

const productJSON = localStorage.getItem('producto');
console.log(productJSON);

const meses = localStorage.getItem('meses');
const mesesArray = JSON.parse(meses);
console.log(mesesArray);