numero = "App 5";
console.log(numero);

const carro = 
{
    nombrec: "Mazda 3",
    disponiblec: true,
    precioc: 50000,
    informacion:
    {
        medidas:
        {
            peso: '1kg',
            medidas: '1m',
        },
        fabricacion:
        {
            pais: 'China',
        },
    },
}

console.log(carro.informacion.fabricacion.pais);