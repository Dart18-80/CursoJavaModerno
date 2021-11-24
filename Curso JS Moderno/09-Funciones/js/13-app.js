pestaña = "App 12";
console.log(pestaña);

const reproductor2 = 
{
    cancion: '',

    reproducir: id => console.log(`Reproduciendo cancion con el id ${id}`),

    pausar: () => console.log ("Pausando cancion..."),

    borras: id => console.log(`Borrando cancion... ${id}`),

    crearPlaylist: nombre => console.log(`Creando la playlist de ${nombre}`),

    reproduciendo: nombre => console.log(`Reproduciendo la playlist ${nombre}`),

    set nuevaCancion(cancion)
    {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion()
    {
        console.log(`Reproduciendo ${this.cancion}`);
    },
}

reproductor2.reproducir(30);
reproductor2.pausar();
reproductor2.borras(30);
reproductor2.crearPlaylist("Mansion House");
reproductor2.reproduciendo("Mansion House");

reproductor2.nuevaCancion = "Im not a Magician";
reproductor2.obtenerCancion;