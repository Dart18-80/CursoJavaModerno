Numero = "App 06";
console.log(Numero);

const videojuegos = 'Los mejores juegos son de Mario';

//Repite una cadena
let texto = ' y estan en promocion!!!'.repeat(3);

console.log(texto);
console.log(`${videojuegos} ${texto}`);

//Si se manda un double lo redondea
texto = ' y estan en promocion!!!'.repeat(2.6);

console.log(texto);
console.log(`${videojuegos} ${texto}`);

//Dividir un string

const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, Caminar, Correr, Aprender, Jugar video juegos';

console.log(hobbies.split(", "));

const tweet = "Aprendiendo JavaScript en Udemy"

console.log(tweet.split('#'));
