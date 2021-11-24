pestaña = "App 10";
console.log(pestaña);


const aprendiendo = function (){
    console.log('Aprendiendo JavaScript');
}

//Si tiene una linea se pueden omitir las llaves
const aprendiendo2 = () => console.log('Aprendiendo JavaScript');

//Contiene implicito el return cuando tiene un sola linea
const aprendiendo3 = () => 'Aprendiendo JavaScript';

aprendiendo();
aprendiendo2();
console.log(aprendiendo3);