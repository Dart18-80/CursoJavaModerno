pestaña = "App 7";
console.log(pestaña);

const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Noviembre', 'Octubre'];

//El orden de como entran los valores importa puesto en ese orden estan los valores en el nuevo arreglo

const TotalMeses = meses.concat(meses2,meses3, 'Diciembre');
console.log(TotalMeses);

const resultadoMeses = [...meses, ...meses2, ...meses3, 'Diciembre'];
console.log(resultadoMeses);