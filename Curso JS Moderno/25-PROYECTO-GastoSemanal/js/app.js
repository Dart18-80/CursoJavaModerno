//Variables y Selectores 
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

//Eventos
eventListener();
function eventListener(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit', agregarGasto);
}


//Clases 
class Presupuesto {
    constructor(presupuesto, restante){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(restante);
        this.gastos = [];
    }
    nuevoGasto (gasto){
        this.gastos = [...this.gastos, gasto];
        console.log(this.gastos);
    }
}

class UI {
    insertarPresupuesto(cantidad){
        //Extrañendo valor 
        const {presupuesto, restante} = cantidad;

        //Agregar al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo){
        //Crear el div
        const div = document.createElement('div');
        div.classList.add('text-center','alert');

        if(tipo == 'error'){
            div.classList.add('alert-danger');
        }
        else{
            div.classList.add('alert-success');
        }

        //Agrega el mensaje
        div.textContent = mensaje;

        //Inserta el HTML
        document.querySelector('.primario').insertBefore(div,formulario);

        setTimeout(() =>{
            div.remove();
        },3000);
    }
    agregarGastoListado(gastos){
        //Iterar solo los gastos
        gastos.forEach(gasto => {
            const {cantidad, nombre, id} = gasto;

            //Crear un li 
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between aling-items-center'
            li.setAttribute('data-id',id);

            //Agregar un HTML del gasto 

            //Boton para borrar el gasto 

            //Agregar a HTML
        });
    }
}

//Instanciar 
let presupuesto;
const ui = new UI();


//Funciones 
function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('Cual es tu presupuesto?');
    if(presupuestoUsuario == "" || presupuestoUsuario == null || isNaN(presupuestoUsuario)|| presupuestoUsuario <= 0){
        window.location.reload();
    }

    //Presupuesto valido

    presupuesto = new Presupuesto(presupuestoUsuario,presupuestoUsuario);

    ui.insertarPresupuesto(presupuesto);
}

//Añadir gastos 
function agregarGasto(e){
    e.preventDefault();
    
    //Leer los datos del formulario 
    const nombre = document.querySelector('#gasto').value;
    const cantidad = document.querySelector('#cantidad').value;

    //Validar 
    if(nombre == '' || cantidad == ''){
        ui.imprimirAlerta('Los campos deben de estar llenos','error');
        return;
    }else if(cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no validad','error');
        return;
    }

    //Generar un objeto con el gasto 
    const gasto = {nombre, cantidad, id: Date.now()};

    //Añadir un nuevo gasto 
    presupuesto.nuevoGasto(gasto);

    //Mensaje de insertar bien el gasto
    ui.imprimirAlerta('Se ingreso correctamente el gasto','correcto');

    //Imprimir los gastos
    const { gastos } = presupuesto;
    ui.agregarGastoListado(gastos);

    //Reiniciar el formulario 
    formulario.reset();
}