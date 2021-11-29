pestaña = "App 10";
console.log(pestaña);

const enlace = document.createElement('a');

//Añadir texto 
enlace.textContent = 'Nuevo Enlace';

//Añadir enlace
enlace.href = '/nuevo-enlace';

enlace.target = "_blank";

enlace.setAttribute('data_enlace', 'nuevo_enlace');
enlace.classList.add('Alguna_clase');

enlace.onclick = miFuncion; 

console.log(enlace);

//Seleccionar donde quiero poner lo que acabo de crear 
const navi = document.querySelector('.navegacion');

console.log(navi.children);

navegacion.insertBefore(enlace, navi.children[1]);

function miFuncion (){
    alert('Diste Click');
}

//Crear un card 

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

//crear div con la clase de info

const info1 = document.createElement('div');
info1.classList.add('info');
info1.appendChild(parrafo1);
info1.appendChild(parrafo2);
info1.appendChild(parrafo3);

//Crear la imagen 

const image = document.createElement('img');
image.src = 'img/hacer2.jpg';
image.alt = "Texto Alternativo";

const CardNuevo = document.createElement('div');
CardNuevo.classList.add('card');

CardNuevo.appendChild(image);
CardNuevo.appendChild(info1);

const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(CardNuevo);