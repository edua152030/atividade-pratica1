/* exercicio 2*/
  let nota1: number = 4;
  let peso1: number = 0.2;
  let nota2: number = 3;
  let peso2: number = 0.9;

function calcMedia(nota1: number, peso1: number, nota2: number, peso2: number): void {
  this.nota1 = nota1;
  this.peso1 = peso1;
  this.nota2 = nota2;
  this.peso2 = peso2;

  let media = (nota1 * peso1 + nota2 * peso2) / 2;

  console.log(`Sua média é ${media}`);
}

calcMedia(nota1, peso1, nota2, peso2);

