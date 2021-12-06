pestaña = 'Pestaña 6';
console.log(pestaña);

function crearIterador(canasta){
    let i = 0; 

    return{
        siguiente: () =>{
            const fin = (i >= canasta.length);
            const valor = !fin ? canasta[i++] : undefined;
            return{
                fin, 
                valor,
            }
        }
    }
}

const canasta = ['producto1','producto2','producto3'];

const recorrerCarrito = crearIterador(canasta);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());




