//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

//Objeto para la busquedad
const datosBusquedad = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '', 
    transmision: '', 
    color: '',
}

//funciones
document.addEventListener('DOMContentLoaded', () =>{
    MostrarAutos(autos);// Mostrar Automoviles al cargar 

    LlenarSelect(); //Llena las opciones de años 
})

//Eventos listener para los selects de busqueda
marca.addEventListener('change', e =>{
    datosBusquedad.marca = e.target.value;
    FiltrarAuto();
})

year.addEventListener('change', e =>{
    datosBusquedad.year = e.target.value;
    FiltrarAuto();
})

minimo.addEventListener('change', e =>{
    datosBusquedad.minimo = e.target.value;
    FiltrarAuto();
})

maximo.addEventListener('change', e =>{
    datosBusquedad.maximo = e.target.value;
    FiltrarAuto();
})

puertas.addEventListener('change', e =>{
    datosBusquedad.puertas = e.target.value;
    FiltrarAuto();
})

transmision.addEventListener('change', e =>{
    datosBusquedad.transmision = e.target.value;
    FiltrarAuto();
})

color.addEventListener('change', e =>{
    datosBusquedad.color = e.target.value;
    FiltrarAuto();
})

function MostrarAutos (autos) {
    LimpiarHTML();
    autos.forEach( auto =>{
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `${marca} - ${modelo} - ${year} - ${puertas} - ${transmision} - Q.${precio}.00 - ${color}`;
        resultado.appendChild(autoHTML);
    });
}

//Limpiar el HTML
function LimpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}


//Llena los años del buscador
function LlenarSelect (){
    for(let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}

//Funciones de filtrado 
function FiltrarAuto (){
    const resultado = autos.filter( FiltrosMarca ).filter( FiltrosYear )
    .filter( FiltrosMinimo ).filter( FiltrosMaximo ).filter( FiltrosPuertas )
    .filter( FiltrosTransmision ).filter( FiltrosColor );
    if( resultado.length ){
        MostrarAutos(resultado);
    }else{
        NoResultado();
    }   
}

function NoResultado(){

    LimpiarHTML();

    const noResultado = document.createElement('p');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados con ese tipo de busqueda, intenta con otros terminos de busqueda';
    resultado.appendChild(noResultado);
}

function FiltrosMarca (auto){
    const { marca } = datosBusquedad;
    if( marca ){
        return auto.marca == marca;
    }
    return auto;
}

function FiltrosYear (auto){
    const { year } = datosBusquedad;
    if( year ){
        return auto.year == year;
    }
    return auto;
}

function FiltrosMinimo (auto){
    const { minimo } = datosBusquedad;
    if( minimo ){
        return auto.precio >= minimo;
    }
    return auto;
}

function FiltrosMaximo (auto){
    const { maximo } = datosBusquedad;
    if( maximo ){
        return auto.precio <= maximo;
    }
    return auto;
}

function FiltrosPuertas (auto){
    const { puertas } = datosBusquedad;
    if( puertas ){
        return auto.puertas == puertas;
    }
    return auto;
}

function FiltrosTransmision (auto){
    const { transmision } = datosBusquedad;
    if( transmision ){
        return auto.transmision == transmision;
    }
    return auto;
}

function FiltrosColor (auto){
    const { color } = datosBusquedad;
    if( color ){
        return auto.color == color;
    }
    return auto;
}