pestaña = "App 3";
console.log(pestaña);


const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('blur', (e) =>{
    console.log(e.target.value);
});