const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    const url = 'https://picsum.photos/list';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(respuesta => mostrarHTML(respuesta));
}

function mostrarHTML(empleados){
    const contenido = document.querySelector('.contenido');

    let html = '';

    empleados.forEach(element => {
        const { author, post_url } = element;

        html += `
            <p>Autor: ${author} </p>
            <a href="${post_url}" target="_blank"> Ver imagen </a>
        `;

        contenido.innerHTML = html;
    });
}