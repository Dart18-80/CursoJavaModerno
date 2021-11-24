pestaña = "App 8";
console.log(pestaña);

const autenticacion = true;

if(autenticacion)
{
    console.log("El usuario esta autenticado");
}

const puntajes = 500;


if(puntajes > 400)
{
    console.log('Ecelente!!!');
}
else if(puntajes > 300)
{
    console.log('Buen puntaje... felicidades!!');
}

function revisarPuntaje (){
    if(puntajes > 400)
    {
        console.log('Ecelente!!!');
        return;
    }

    if(puntajes > 300)
    {
        console.log('Buen puntaje... felicidades!!');
        return;
    }
}

revisarPuntaje();