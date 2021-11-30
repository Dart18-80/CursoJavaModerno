pestaña = "App 5";
console.log(pestaña);

window.addEventListener('scroll', () =>{
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    if(ubicacion.top < 784){
        console.log('El elemanto ya es visible');
    }
    else{
        console.log('Aun no es visible, da mas scrollS');
    }
});