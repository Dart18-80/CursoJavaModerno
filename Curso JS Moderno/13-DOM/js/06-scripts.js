pestaña = "App 6";
console.log(pestaña);


const Encabezado = document.querySelector('.contenido-hero h1');
console.log(Encabezado);

console.log(Encabezado.innerText); // Si en el CSS -Visibility: hidden; no lo va a encontrar
console.log(Encabezado.innerHTML);//Se trae el HTML
console.log(Encabezado.textContent);//Si va a encontrar el css Visibility: hidden; 

const Encabezado2 = document.querySelector('.contenido-hero h1').textContent;
console.log(Encabezado2);

const NuevoEncabezado = 'Nuevo encabezado';
document.querySelector('.contenido-hero h1').textContent = NuevoEncabezado;

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';