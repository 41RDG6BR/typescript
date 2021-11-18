function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Rodrigo',
  sobrenome: 'Nogueira',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Rodrigo', 'Nogueira');
pessoa.exibirNome();

export { pessoa }
