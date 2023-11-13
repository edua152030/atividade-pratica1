/* exercicio 7*/

import { log } from "console";

type Funcionario = {
  nome: string;
  idade: number;
  ocupacao: string;
  comissionamento: number;
  salario?: number;
};

type Diretor = {
  comissionamento?: number;
};

type Todos = Funcionario & Diretor;

function imprimirDetalhes(user: Todos): void {
  if ('comissionamento' in user) {
    console.log(
      `Nome: ${user.nome}, Idade: ${user.idade} anos, ${user.ocupacao}, comissão nivel ${user.comissionamento}, ${
        user.salario !== undefined ? user.salario : 'n/a'
      }`
    );
  } else {
    console.log(
      `Nome: ${user.nome}, Idade: ${user.idade} anos, ${user.ocupacao}, ${
        user.salario !== undefined ? user.salario : 'n/a'
      }`
    );
  }
}

const usuario1: Funcionario = {
  nome: 'Maria',
  idade: 25,
  ocupacao: 'Designer',
  salario: 50000
};

const usuario2: Todos = {
  nome: 'Eduardo',
  idade: 40,
  ocupacao: 'Analista de TI',
  comissionamento: 5,
};


imprimirDetalhes(usuario1);
imprimirDetalhes(usuario2);
