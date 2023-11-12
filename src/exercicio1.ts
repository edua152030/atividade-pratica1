/* exercicio 1*/

function calculate(num1: number, num2: number) {
    let average: number = (num1 + num2) / 2;
    if(average >= 6){
        console.log(`o aluno foi aprovado nota : ${average}`)
    }else{
        console.log(`o aluno foi reprovado nota : ${average}`)
    }
}
  console.log(calculate(8, 7))
