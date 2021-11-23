pestaña = "App 7";
console.log(pestaña);


IniciarApp();

function IniciarApp()
{
    console.log("Iniciando App....");
    SegundaFuncion();
}

function SegundaFuncion()
{
    console.log("Autenticando Usuario .... ");
    UsuarioAutenticacion('Diego');
}

function UsuarioAutenticacion (nombre)
{
    console.log("El usuario hasido autenticado exitosamente");
    console.log(`Bienvenido ${nombre}`);
}