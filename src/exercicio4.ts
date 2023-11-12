/* exercicio 4*/
let produtos: Array<object> = [{nome: 'produto1' , preco: 2.00}]

function listProducts(): void{
  console.log(produtos);
}

listProducts()

function includeProducts(): void{
  produtos.push({
    nome: 'produto2',
    preco: 1.00
  })
}

includeProducts()
console.log(produtos)

function removeProducts(nome: string): void {
  const index = produtos.findIndex(produto => produto.nome === nome);

  if (index !== -1) {
    produtos.splice(index, 1);
    console.log(`Produto com nome '${nome}' removido.`);
  } else {
    console.log(`Produto com nome '${nome}' não encontrado.`);
  }
}

removeProducts('produto2');
listProducts();
