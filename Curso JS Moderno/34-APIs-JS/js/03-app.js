window.addEventListener('online',actualizarEstado);
window.addEventListener('ofline',actualizarEstado);

function actualizarEstado(){
    if(navigator.onLine){
        console.log('Si estas conectado a internet');
    }else{
        console.log('No estas conectado a internet');
    }
}
