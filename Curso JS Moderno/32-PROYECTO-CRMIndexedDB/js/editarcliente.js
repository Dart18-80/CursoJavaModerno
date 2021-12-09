(function (){
    let idCliente;

    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');

    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () =>{
        //Conecta la DB
        conectarDB();

        //Actualizar el registro 
        formulario.addEventListener('submit', actualizarCliente);

        //Varificar el ID de la URL 
        const paramentrosURL = new URLSearchParams(window.location.search);

        idCliente = paramentrosURL.get('id');

        if(idCliente){
            setTimeout(() =>{
                obtenerCliente(idCliente);
            }, 100);
        }

    });

    function obtenerCliente(id){
        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');

        const cliente = objectStore.openCursor();

        cliente.onsuccess = function(e){
            const cursor = e.target.result;

            if(cursor){
                if(cursor.value.id == id){
                    llenarFormulario(cursor.value);
                }
                cursor.continue();
            }
        }
    }

    function llenarFormulario(cliente){
        const { nombre, email, telefono, empresa } = cliente; 
        
        nombreInput.value = nombre; 
        telefonoInput.value = telefono;
        emailInput.value = email;
        empresaInput.value = empresa;
    }

    function actualizarCliente(e){
        e.preventDefault();
        
        if(nombreInput.value == '' || telefonoInput.value == '' || emailInput.value == '' || empresaInput.value == ''){
            imprimirAlerta('Todos los campos deben de estar llenos', 'error');
            return;
        }

        const clienteActualizado = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: Number(idCliente),
        };

        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');

        objectStore.put(clienteActualizado);

        transaction.onerror= function (){
            imprimirAlerta('No se agrego correctamente a la base de datos', 'error');
        };

        transaction.oncomplete = function(){
            imprimirAlerta('Se agrego correctamente a la base de datos');
            setTimeout(() =>{
                window.location.href = 'index.html';
            },2000);
        };

    }

})();