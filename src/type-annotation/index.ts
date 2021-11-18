//Tipos básicos (aquiocorre inferêcia de tipos)
let nome: string = 'Rodrigo';
let idade: number = 34;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
let big: bigint = 10n;


//Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b', 'c'];
let arrayDeStrings2: string[] = ['a', 'b', 'c'];

//Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 30,
  nome: 'Rodrigo'
};

//Funçoes
function soma(x: number, y: number): number {
  return x + y
}

const soma2: (x: number, y:  number) => number = (x, y) => x + y;
