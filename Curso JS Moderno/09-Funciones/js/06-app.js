pestaña = "App 6";
console.log(pestaña);

function Hola (nombre = "No se ingreso el nombre ",apellido = "No se ingreso el apellido")
{
    console.log(`Hola ${nombre} ${apellido} ¿Como estas?`);
}

Hola('Diego');
Hola('','Ruiz');
Hola();