pestaña = "App 2";
console.log(pestaña);

const nav = document.querySelector('.navegacion');

nav.addEventListener('mouseout', () =>{
    console.log('Saliendo de la navegacion');
    nav.style.backgroundColor = 'transparent';
});

nav.addEventListener('mouseenter', () =>{
    console.log('Entrando de la navegacion');
    nav.style.backgroundColor = 'white';
});
