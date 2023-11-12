/* exercicio 6*/
type diretor = {
  nome: string
  idade: number
  ocupacao: string
  comissionamento: number
  salario?: number
}

function listUsers(users: diretor): void{
  console.log(`Nome: ${users.nome}, Idade: ${users.idade} anos, ${users.ocupacao}, comissão nivel ${users.comissionamento}, ${users.salario != undefined ? users.salario : 'n/a'}`)
}

const usuario1: diretor = {
  nome: 'Maria',
  idade: 25,
  ocupacao: 'Designer',
  comissionamento: 5,
  salario: 50000
}

const usuario2: diretor = {
  nome: 'eduardo',
  idade: 40,
  ocupacao: 'analista de TI',
  comissionamento: 5
}

listUsers(usuario1)
listUsers(usuario2)
