localStorage.setItem('nombre',1);

const producto = {
    nombre: 'Zelda', 
    precio: 500,
}

const productoString = JSON.stringify( producto );
localStorage.setItem('producto', productoString);

const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses', JSON.stringify( meses ));