let pestaña = "App 1";
console.log(pestaña);

// Ciclo for 

for(let i = 0; i < 10; i++)
{
    console.log(`Numero: ${i+1}`);
}

for(let i = 0; i <= 10; i++)
{
    console.log(`Numero: ${i+1}`);
}

for(let i = 0; i < 20; i++)
{
    console.log(i % 2 == 0 ? `Es par ${i}` : `Es impar ${i}`);
}

const canasta = 
[
    {nombre: "Super Mario Bros", precio: 500},
    {nombre: "Mario Kart 8", precio: 600},
    {nombre: "Metroid", precio: 550, descuento: true},
    {nombre: "Luigi Mansion 3", precio: 650},
    {nombre: "Mario Tenis Rush", precio: 400},
]

for(let i = 0; i< canasta.length; i++)
{
    console.log(`Llevas el juego: ${canasta[i].nombre} con precio de ${canasta[i].precio}`);
}

