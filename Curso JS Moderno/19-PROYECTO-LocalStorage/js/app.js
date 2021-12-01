//Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

//Event Listener
eventListener();

function eventListener(){
    //Usuario envia un mensaje
    formulario.addEventListener('submit', agregarTweet);

    //Cuando el documento esta listo 
    document.addEventListener('DOMContentLoaded', () =>{
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        crearHTML();
        console.log(tweets);
    });
}

//Funciones
function agregarTweet(e){
    e.preventDefault();

    //TextArea donde el usuario Escribe 
    const tweet = document.querySelector('#tweet').value;
    
    //Validacion no este vacio 
    if(tweet == ''){
        //Llama a la funcion para mostrar un error 
        mostrarError('Un mensaje no puede ir vacio');
        return; //Evita que se ejecuten mas lineas de codigo
    }

    const tweetObj = {
        id: Date.now(),
        tweet,
    }
    
    //Añadir al arreglo de Tweets
    tweets = [...tweets, tweetObj];

    //Crear el HTML
    crearHTML();

    //Limpiar el formulario
    formulario.reset();

}

//Mostrar mensaje de error 
function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //Insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    //Para eliminar el mensaje de error 
    setTimeout(() =>{
        mensajeError.remove();
    }, 3000);
}

//Muestra un listado de los Tweets 
function crearHTML(){
    //Limpiar el HTML cada vez que se ejecute 
    LimpiarHTML();

    if(tweets.length > 0){
        tweets.forEach( tweet => {
            //Agregar un boton de eliminar 
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            //Añadir la funcion de eliminar 
            btnEliminar.onclick = () =>{
                borrarTweet(tweet.id);
            }

            // Crear el HTML
            const li = document.createElement('li');
            //Añadir el texto 
            li.innerText = tweet.tweet;

            listaTweets.appendChild(btnEliminar);

            //Insertarlo en el html
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}

//Agrega los tweet actualez al storage 
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//Eliminar el Tweet 
function borrarTweet(id){
    tweets = tweets.filter(tweet => tweet.id != id);
    crearHTML();
}


//Limpiar el html 
function LimpiarHTML (){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}