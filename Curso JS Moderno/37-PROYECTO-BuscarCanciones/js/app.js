//Imports de elementos
import * as UI from './interfaz.js';
import API from './api.js';



UI.formularioBuscar.addEventListener('submit', buscarCancion);

function buscarCancion(e){
    e.preventDefault();
    
    //Obtener datos del formulario 
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    //Comprobacion de que esta vacio
    if(artista == '' || cancion == ''){
        //El Usuario dejo al menos un campo vacio, mostrar error 
        UI.divMensaje.textContent = 'Error... Todos los campos son obligatorios';
        UI.divMensaje.classList.add('error');

        //Quitar el mensaje de error despues de un tiempo
        setTimeout(() =>{
            UI.divMensaje.textContent = '';
            UI.divMensaje.classList.remove('error');
        }, 3000);

        //Return para que no siga avanzando en el bloque de codigo
        return;
    }

    //Consultar a nuestra API 
    const busqueda = new API(artista, cancion);
    
    busqueda.consultarAPI(cancion,artista);
}