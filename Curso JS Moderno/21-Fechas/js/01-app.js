const diaHoy = new Date();

let fecha, año, mes, minutos, horas; 

fecha = diaHoy;
año = diaHoy.getFullYear();
mes = diaHoy.getMonth();
minutos = diaHoy.getMinutes();
horas = diaHoy.getHours();

console.log(fecha);
console.log(año);
console.log(mes);
console.log(minutos);
console.log(horas);
