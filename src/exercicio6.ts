/* exercicio 6*/
type diretor = {
  nome: string
  idade: number
  ocupacao: string
  comissionamento: number
  salario?: number
}

function listUsers1(users: diretor): void{
  console.log(`Nome: ${users.nome}, Idade: ${users.idade} anos, ${users.ocupacao}, comissão nivel ${users.comissionamento}, ${users.salario != undefined ? users.salario : 'n/a'}`)
}

const usuario1ex6: diretor = {
  nome: 'Maria',
  idade: 25,
  ocupacao: 'Designer',
  comissionamento: 5,
  salario: 50000
}

const usuario2ex6: diretor = {
  nome: 'eduardo',
  idade: 40,
  ocupacao: 'analista de TI',
  comissionamento: 5
}

listUsers1(usuario1ex6)
listUsers1(usuario2ex6)
