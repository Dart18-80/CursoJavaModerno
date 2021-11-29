pestaña = "App 5";
console.log(pestaña);

//con Foreach

let result = '';

canasta.forEach((product, index) =>{
    if(product.nombre ==='Mario Tenis Rush'){
        result = canasta[index];
    }
});
console.log(result);

// con . find 

const result2 = canasta.find(product => product.precio === 550);
console.log(result2);