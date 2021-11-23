pestaña = "App 2";
console.log(pestaña);


//Si funciona puesto que java primero registra funciones y despues ejecuciones
restar();
function restar()
{
    console.log(2 - 2);
}

//No funciona por que esta es una funcion variable entonces se ejecuta iterativamente,
// por lo tanto llamarlo antes el piensa que no existe 
restar2();
const restar2  = function()
{
    console.log( 3 - 2 );
}

