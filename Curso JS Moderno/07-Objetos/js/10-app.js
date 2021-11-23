numero = "App 10";
console.log(numero);

const consola = 
{
    nombrec: "Nintendo Switch",
    precioc: 4000,
    statusc: true,
}

const medidas =
{
    ancho: 60,
    altura: 40,
}

console.log(consola);
console.log(medidas);

//Comando para unir dos objetos
const resul = Object.assign(consola, medidas);

//Spread Operator o Rest operator
const result2 = {... consola, ...medidas}

console.log(resul);
console.log(result2);

