import { ClienteObtener, editarCliente } from './API.js';
import { mostrarAlerta, validar } from './funciones.js';

(function (){
    //campos del formulario
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');

    document.addEventListener('DOMContentLoaded', async () =>{
        const parametrosURL = new URLSearchParams(window.location.search);

        const idCliente = parseInt(parametrosURL.get('id'));

        const cliente = await ClienteObtener(idCliente);

        mostrarCliente(cliente);

        //Submit al formulario 
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente);
    });

    function mostrarCliente(cliente){
        const { nombre, empresa, email, telefono, id } = cliente;

        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
        idInput.value = id;

    }

    function validarCliente(e){
        e.preventDefault();

        const cliente = {
            nombre: nombreInput.value, 
            email: emailInput.value,
            telefono: telefonoInput.value, 
            empresa: empresaInput.value,
            id: parseInt(idInput.value),
        }
        //Los campos se encuentran vacios
        if(validar(cliente)){
            //Mostrar mensaje de alerta
            mostrarAlerta('No pueden estar los campos vacios');
            return;
        }
        //Reescribe el objeto
        editarCliente(cliente);
    }
})();