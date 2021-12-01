//Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let carritoCompras = [];

//funciones
CargarEventListener();
function CargarEventListener () {
    //Agregar un curso al precionar "Agregar Carrito"
    listaCursos.addEventListener('click', AgregarCarrito);

    //Eliminar cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Muestra los cursos del local storage
    document.addEventListener('DOMContentLoaded', () =>{
        carritoCompras = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoHTML();
    });

    //Vaciar el carrito 
    vaciarCarritoBtn.addEventListener('click', () =>{
        carritoCompras = [];
        limpiarHTML();
    });
}

function AgregarCarrito (e){
    e.preventDefault();
    
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        LeerCurso(cursoSeleccionado);
    }
}

//Eliminar un curso del carrito 
function eliminarCurso (e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');
        carritoCompras = carritoCompras.filter( curso => curso.id !== cursoId);
    }
    carritoHTML();
}


//Leer el contenido del HTML al que le dimos click y extrae la infomracion del curso

function LeerCurso (curso){
    //Crear un objeto con el contenido del curso
    const infoCurso = {
        imagen: curso.querySelector('img').src, 
        titulo: curso.querySelector('h4').textContent, 
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //Revisar si un elemento ya existe en el carrito
    const existe = carritoCompras.some(curso => curso.id === infoCurso.id);
    if(existe){

        //Actualiza la cantidad
        const cursos = carritoCompras.map( curso => {
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso; //retorna el objeto actualizado
            }else{
                return curso; //retorna los objetos que no son los duplicados
            }
        });
        carritoCompras = [...cursos];
    }else{
        //Agrega elementos al arreglo de carrito
        carritoCompras = [...carritoCompras, infoCurso];
    }
    carritoHTML();
}

//Muestra el carrito de compras con HTML
function carritoHTML (){
    //Limpiar el html
    limpiarHTML();

    //Se agregan los cursos en el HTML
    carritoCompras.forEach( cursos =>{
        const {imagen, titulo, precio, cantidad, id} = cursos;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width = 100>
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;
        //Agrega el html del carrito en el tbody
        contenedorCarrito.appendChild(row);
    });

    //Sincronizar con Storage 
    sincronizarStorage();
}

function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(carritoCompras));
}


//Eliminar los cursos del tbody
function limpiarHTML(){
    //Forma lenta
    //contenedorCarrito.innerHTML = '';

    //Forma rapida
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}