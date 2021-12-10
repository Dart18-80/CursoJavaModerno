//Export de otras clases 
import { mostrarAlerta, validar } from './funciones.js';
import { nuevoCliente } from './API.js';


//Funciones unicas de la vista
(function (){
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', validarCliente);

    function validarCliente(e){
        e.preventDefault();
        
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;
        
        const cliente = {
            nombre, 
            email,
            telefono, 
            empresa,
        }
        //Los campos se encuentran vacios
        if(validar(cliente)){
            //Mostrar mensaje de alerta
            mostrarAlerta('No pueden estar los campos vacios');
            return;
        }

        //El acceso es el correcto 
        nuevoCliente(cliente);


    }
})();