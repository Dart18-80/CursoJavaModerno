let pestaña = "App 1";
console.log(pestaña);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];


//Forma grande de verificar si existe un elemento dentro de un arreglo 
meses.forEach( mes => {
    if(mes === 'Enero'){
        console.log('Enero si existe');
    }
});

//Forma resumida de verificar si existe un elemento dentro de un arreglo
const resultado = meses.includes('Enero');

console.log(resultado);


const canasta = 
[
    {nombre: "Super Mario Bros", precio: 500},
    {nombre: "Mario Kart 8", precio: 600},
    {nombre: "Metroid", precio: 550, descuento: true},
    {nombre: "Luigi Mansion 3", precio: 650},
    {nombre: "Mario Tenis Rush", precio: 400},
]

//Forma de comprobar en arreglo de objetos
const existe = canasta.some( producto => producto.nombre == "Super Mario Bros");

console.log(existe);

//En un arreglo tradicional con .some
//Soporta arreglos tradicionales y arreglos de objetos
const existe2 = meses.some( mes => mes == 'Febrero');
