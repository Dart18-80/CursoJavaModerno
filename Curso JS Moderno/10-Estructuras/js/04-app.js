pestaña = "App 4";
console.log(pestaña);

const tarjeta = false;
const cheque = true;

if(dinero >= totalApagar)
    console.log(`Si le alcanza y sobra: Q.${dinero - totalApagar}.00`);
else if(tarjeta)
    console.log('Si puedo pagar por que tengo la tarjeta');
else
    console.log(`No le alcanza, le falta Q.${dinero - totalApagar}.00`);


if(dinero >= totalApagar)
    console.log(`Si le alcanza y sobra: Q.${dinero - totalApagar}.00`);
else if(tarjeta)
    console.log('Si puedo pagar por que tengo la tarjeta');
else if(cheque)
    console.log('Si puedo pagar por que tengo chequera');
else
    console.log(`No le alcanza, le falta Q.${dinero - totalApagar}.00`);