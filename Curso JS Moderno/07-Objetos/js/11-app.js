numero = "App 11";
console.log(numero);


const televisor = 
{
    nombret: 'Samsung',
    preciot: 2000,
    statust: true,
    mostrarInfo: function()
    {
        console.log(`El producto: ${this.nombret} tiene un precio de: ${this.preciot}`);
    }
}

const televisor2 = 
{
    nombret: 'LG',
    preciot: 3000,
    statust: false,
    mostrarInfo: function()
    {
        console.log(`El producto: ${this.nombret} tiene un precio de: ${this.preciot}`);
    }
}

televisor.mostrarInfo();
televisor2.mostrarInfo();