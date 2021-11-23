pestaña = "App 9";
console.log(pestaña);



const reproducto = 
{
    reproducir: function(id)
    {
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function(id)
    {
        console.log(`Pausar cancion con el id ${id}`);
    },
    playlist: playlistV = [],
}

reproducto.reproducir(30);
reproducto.reproducir(30);

reproducto.pausar(30);
reproducto.pausar(30);

reproducto.borrar = function(id)
{
    console.log(`Borrando cancion con el id ${id}`);
}

reproducto.AgregarPlaylist = function(nom, artis)
{
    reproducto.playlist.push({nombre: nom, artista: artis});
}

reproducto.MostratPlaylist = function()
{
    console.table(reproducto.playlist);
}

reproducto.AgregarPlaylist('Lo siento Bb','Bad Bunny');
reproducto.AgregarPlaylist('Do or die','Thirty Seconds to Mars');
reproducto.AgregarPlaylist('Sesion 30','BZR');

reproducto.MostratPlaylist();

