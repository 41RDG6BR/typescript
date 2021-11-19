let x = 10; //eslint-disable-line
x = 0b1010;
const y = 10
const a = 100 //eslint-disable-line


const pessoa = {
   nome: 'Rodrigo' as const,
   sobrenome: 'Nogueira'
};

function escolhaCor(cor: 'Azul' | 'Amarelo' | 'Verde'): string {
  return cor;
}

console.log(escolhaCor("Amarelo"))

//Module mode
export default 1;
