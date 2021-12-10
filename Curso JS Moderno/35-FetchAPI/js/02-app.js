const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){
    const url = 'data/empleado.json';
    fetch(url)
        .then(respuesta =>{
            return respuesta.json();
        })
        .then(respuesta =>{
            mostrarHTML(respuesta);
        })
        .catch( error =>{
            console.log(error);
        })
}

function mostrarHTML({empresa, nombre, id, trabajo}){
    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = `
        <p>Empleado: ${nombre} </p>
        <p>ID: ${id} </p>
        <p>Empresa: ${empresa} </p>
        <p>Trabajo: ${trabajo} </p>
    `;
}