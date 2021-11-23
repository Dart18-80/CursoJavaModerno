numero = "App 12";
console.log(numero);

const casa = 
{
    colonia: "Quinta los encinos",
    enganche: 160000,
    numeroCasa: 'E-5'
}

function Casa (colonia, enganche)
{
    this.colonia = colonia; 
    this.enganche = enganche;
    this.numeroCasa = 'A-6';
}

console.log(casa);

const casa2 = new Casa('Luces del encinal', 52000);
console.log(casa2);

const casa3 = new Casa('Nimajay', 40000);
console.log(casa3);