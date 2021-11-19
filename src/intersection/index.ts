type TemNome = { nome: string };
type TemSobreNome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobreNome & TemIdade;

// type AB  = 'A' | 'B'
// type AC  = 'A' | 'C'
// type AD  = 'D' | 'A'
// type Intersecao = AB & AC & AD;

const p: Pessoa = {
    nome: 'Rodrigo',
    sobrenome: 'Nogueira',
    idade: 34,
}

console.log(p)

export { p };
