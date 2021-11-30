pestaña = "App 4";
console.log(pestaña);

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', ValidarFormulario);

function ValidarFormulario (e){
    e.preventDefault();
    console.log('Buscando..');
    console.log(e.target.action);
}