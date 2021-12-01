//Eliminar un registro
localStorage.removeItem('nombre');

//Actualizar un registro
const mesesArray = JSON.parse(localStorage.getItem('meses'));
mesesArray.push('Agosto');
localStorage.setItem('meses', JSON.stringify(mesesArray));

localStorage.clear();