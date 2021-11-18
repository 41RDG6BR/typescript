//tuple
const dadosCliente1: readonly [number, string] = [1, 'Rodrigo'];
const dadosCliente2: [number, string, string] = [1, 'Rodrigo', 'Nogueira'];
const dadosCliente3: [number, string, string?] = [1, 'Rodrigo'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Rodrigo', 'Nogueira'];

// dadosCliente1[0] = 100;
// dadosCliente1[1] = 'Rodrigo';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);


const array1: readonly string[] = ['Rodrigo', 'Nogueira'];
const array2: ReadonlyArray<string> = ['Rodrigo', 'Nogueira']
console.log(array1);
console.log(array2);
