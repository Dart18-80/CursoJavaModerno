document.addEventListener('visibilitychange', () =>{
    if(document.visibilityState == 'visible'){
        console.log('Reproducir el video');
    }else{
        console.log('Dejar de ejecutar el video');
    }
});