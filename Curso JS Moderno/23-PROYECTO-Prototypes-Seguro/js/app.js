//Constructores

function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function (){
    /*
        1 = Americana ^ 1.15
        2 = asiatico ^ 1.05
        3 =Europeo ^1.35
    */
   let cantidad; 
   const base = 2000;
   switch(this.marca){
        case '1':
            cantidad = base *1.15;
            break;
        case '2':
            cantidad = base *1.05;
            break;
        case '3':
            cantidad = base *1.35;
            break;
       default:
           break;
   }

   //Leer el año 
   //Cada año que la diferencia es mayo el costo se reduce un 3%
   const diferencia = new Date().getFullYear() - this.year;
   cantidad -= ((diferencia * 3) * cantidad)/100;

   if(this.tipo === 'basico'){
        cantidad *= 1.30;
   }else{
       cantidad *= 1.50;
   }

   return cantidad;

}

function UI(){}

UI.prototype.llenarOpciones = () =>{
    const Max = new Date().getFullYear(),
    min = Max-20;

    const selectYear = document.querySelector('#year');

    for(let i = Max; i > min; i--){
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i; 
        selectYear.appendChild(option);
    }
}

UI.prototype.mostrarMensaje = (mensaje,tipo) =>{
    const div = document.createElement('div');
    if(tipo == 'error'){
        div.classList.add('error');
    }else{
        div.classList.add('correcto');
    }
    div.classList.add('mensaje','mt-10');
    div.textContent = mensaje;

    //Insertar en el HTML
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div,document.querySelector('#resultado'));

    setTimeout(() =>{
        div.remove();
    }, 3000);
}

UI.prototype.mostrarResultado = (seguro, total) =>{
    //Crear el resultado 
    const {marca, year, tipo} = seguro;
    let TextoMarca;
    switch(marca){
        case '1':
            TextoMarca = 'Americano';
            break;
        case '2':
            TextoMarca = 'Asiatico';
            break;
        case '3':
            TextoMarca = 'Europeo';
            break;
       default:
           break;
   }

    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
        <p class="header">Tu resumen </p>
        <p class="font-bold">Marca: <span class="font-normal">${TextoMarca}</span></p>
        <p class="font-bold">Año: <span class="font-normal">${year}</span></p>
        <p class="font-bold">Tipo de Seguro: <span class="font-normal">${tipo}</span></p>
        <p class="font-bold">Total: $<span class="font-normal">${total}</span></p>
    `;

    const resultadoDiv = document.querySelector('#resultado');

    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout(()=>{
        spinner.style.display = 'none';
        resultadoDiv.appendChild(div);
    }, 3000 );
}

//Instancias del UI
const ui = new UI();


document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones();
})

EventListener();

function EventListener(){
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', CotizarSeguro);
}

function CotizarSeguro (e){
    e.preventDefault();
    
    //Leer la marca
    const marca = document.querySelector('#marca').value;

    //Leer el año seleccionado 
    const year = document.querySelector('#year').value;

    //Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if(marca == '' || year == '' || tipo == ''){
        ui.mostrarMensaje('Todos los campos son obligatorios','error');
        return;
    }
    
    ui.mostrarMensaje('Cotizando...','Exito');

    const resultados = document.querySelector('#resultado div');
    if(resultados != null){
        resultados.remove();
    }

    //Instanciar el seguro 
    const seguro = new Seguro(marca, year, tipo);


    //Utilizar el prototype que va a cotizar 
    const total = seguro.cotizarSeguro();

    ui.mostrarResultado(seguro, total);
}