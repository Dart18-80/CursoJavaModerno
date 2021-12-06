import alias, {nombreCliente, valor, mostrarInformacion, tieneSaldo, Cliente} from './cliente.js'
import { Empresa } from './empresa.js';

console.log(nombreCliente);

console.log(valor);

console.log(mostrarInformacion('Diego',600));

console.log(tieneSaldo(500));

const cliente = new Cliente(nombreCliente, valor);

console.log(cliente);
console.log(cliente.mostrarInformacionC());

const empresa = new Empresa('Diego', 1000, 'Aprendizaje en linea');
console.log(empresa);

alias(); 