pestaña = "App 2";
console.log(pestaña);

meses.forEach( (mes, index) =>{
    console.log(index);
    console.log(mes);
})

//Forma larga de encontrar el indice
meses.forEach( (mes, index) =>{
    if(mes === 'Abril'){
        console.log(`Encontrar en el indice ${index}`);
    }
})

//Forma corta de encontrar un indice
const indice = meses.findIndex(mes => mes === 'Abril');
console.log(indice);

const indice2 = canasta.findIndex( producto => producto.precio === 500);
console.log(indice2);

