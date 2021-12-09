//Seleccionadores
const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load',() =>{
    formulario.addEventListener('submit', buscarClima);
})

function buscarClima(e){
    e.preventDefault();
    
    //Validar 
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if(ciudad == '' || pais == ''){
        mostrarError('Ambos campos son obligatorios');
        return;
    }
    //Consultar la API
    consultarAPI(ciudad, pais);
}

function mostrarError(mensaje){
    //Crear una alerta 
    const alerta = document.querySelector('.bg-red-100');

    if(!alerta){
        const alerta = document.createElement('div');

        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700','px-4','py-3', 'rounded',
        'max-w-md', 'mx-auto', 'mt-6','text-center');

        alerta.innerHTML = `
            <strong class="font-bold">Error</strong>
            <span class="block">${mensaje}</span>
        `;

        container.appendChild(alerta);

        //Eliminar la alerta 
        setTimeout(() =>{
            alerta.remove();
        },3000);
    }
}

function consultarAPI(ciudad, pais){
    const appID = 'ac0cac6248006f8d3ba27655fe31f365';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;

    Spinner();

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            //Limpiar el html 
            limpiarHTML();

            if(datos.cod === "404"){
                mostrarError('Ciudad no encontrada');
                return;
            }

            //Imprime la respuesta en el HTML 
            mostrarClima(datos);
        });
}

function mostrarClima(clima){
    const {name, main: { temp, temp_max, temp_min} } = clima

    const centigrados = kelvinACentigrados(temp);
    const max = kelvinACentigrados(temp_max);
    const min = kelvinACentigrados(temp_min);

    const nombreCiudad = document.createElement('p');
    nombreCiudad.textContent = `Clima en ${name}`;
    nombreCiudad.classList.add('font-bold', 'text-2xl');

    const actual = document.createElement('p');
    actual.innerHTML = `${centigrados} &#8451;`;
    actual.classList.add('font-bold', 'text-6xl');

    const tempMax = document.createElement('p');
    tempMax.innerHTML = `Max: ${max} &#8451`;
    tempMax.classList.add('text-xl');

    const tempMin = document.createElement('p');
    tempMin.innerHTML = `Min: ${min} &#8451`;
    tempMin.classList.add('text-xl');

    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center','text-white');
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(tempMax);
    resultadoDiv.appendChild(tempMin);

    resultado.appendChild(resultadoDiv);
}

function Spinner(){
    
    limpiarHTML();

    const divSpinner = document.createElement('div');
    divSpinner.classList.add('spinner');
    resultado.appendChild(divSpinner);
}

function kelvinACentigrados(grados){
    const resultado = grados -273.15;
    const res = Math.round((resultado + Number.EPSILON) * 100) / 100;
    return res;
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}