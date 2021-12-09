const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () =>{
    Notification
        .requestPermission()
        .then(resultado => {
            console.log('El resultado es: ', resultado);
        })
});

const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () =>{
    if(Notification.permission === 'granted'){
        const notificacion = new Notification('Es es la notificacion',{
            icon: 'img/ccj.png', 
            body: 'Codigo con Diego, aprende con proyectos reales'
        });

        notificacion.onclick = function(){
            window.open('https://www.instagram.com/dartr_/');
        }
    }
});

