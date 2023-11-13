/* exercicio 5*/
type user = {
  nome: string
  idade: number
  ocupacao: string
  salario?: number
}

function listUsers(users: user): void{
  console.log(`Nome: ${users.nome}, Idade: ${users.idade} anos, ${users.ocupacao}, ${users.salario != undefined ? users.salario : 'n/a'}`)
}

const usuario1ex5: user = {
  nome: 'Maria',
  idade: 25,
  ocupacao: 'Designer',
  salario: 50000
}

const usuario2ex5: user = {
  nome: 'eduardo',
  idade: 40,
  ocupacao: 'analista de TI'
}

listUsers(usuario1ex5)
listUsers(usuario2ex5)
