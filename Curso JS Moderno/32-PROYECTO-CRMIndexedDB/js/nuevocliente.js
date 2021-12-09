(function() {

    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () =>{
        conectarDB();

        formulario.addEventListener('submit',validarCliente);
    });


    function validarCliente (e){
        e.preventDefault();
        
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        if(nombre == '' || email == '' || telefono == '' || empresa == ''){
            imprimirAlerta('Todos los campos son obligatorios', 'error');
            return;
        }

        //Crear un objeto con la informacion
        const cliente = {
            nombre, 
            email,
            telefono, 
            empresa,
        }
        cliente.id = Date.now();

        CrearNuevoCliente(cliente);

    }

    function CrearNuevoCliente(cliente){
        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');
        objectStore.add(cliente);

        transaction.onerror= function (){
            imprimirAlerta('No se agrego correctamente a la base de datos', 'error');
        };

        transaction.oncomplete = function(){
            imprimirAlerta('Se agrego correctamente a la base de datos');
        };
    }


})();