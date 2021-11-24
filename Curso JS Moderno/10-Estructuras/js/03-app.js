pestaña = "App 3";
console.log(pestaña);

const dinero = 500;
const totalApagar = 600;

if(dinero >= totalApagar)
    console.log(`Si le alcanza y sobra: Q.${dinero - totalApagar}.00`);
else
    console.log(`No le alcanza, le falta Q.${dinero - totalApagar}.00`);

if(dinero < totalApagar)
    console.log(`No le alcanza, le falta Q.${dinero - totalApagar}.00`);
else
    console.log(`Si le alcanza y sobra: Q.${dinero - totalApagar}.00`);

