import * as UI from './interfaz.js';

class API {
    constructor(artista, cancion){
        this.artista = artista; 
        this.cancion = cancion;
    }
    consultarAPI(song, artist){
        const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(respuesta => {
                if(respuesta.lyrics){
                    const { lyrics } = respuesta;

                    UI.divResultado.textContent = lyrics; 
                    UI.headingResultado.textContent = `Letra de la cancion: ${song} de ${artist}`;
                }else{
                    UI.divMensaje.textContent = 'La cancion no existe, prueba con otra busqueda';
                    UI.divMensaje.classList.add('error');

                    setTimeout(() =>{
                        UI.divMensaje.textContent = '';
                        UI.divMensaje.classList.remove('error');
                    },3000);
                }
            }).catch(() =>{
                UI.divMensaje.textContent = 'La cancion no existe, prueba con otra busqueda';
                UI.divMensaje.classList.add('error');

                setTimeout(() =>{
                    UI.divMensaje.textContent = '';
                    UI.divMensaje.classList.remove('error');
                },3000);
            });
    }
}

export default API;