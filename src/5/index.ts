import { Pedido, ItemPedido } from './atividade_5';

const item1 = new ItemPedido(20, 'ProdutoA', 2)
const item2 = new ItemPedido(30, 'ProdutoB', 1)

const pedido = new Pedido()

pedido.add(item1)
pedido.add(item2)

console.log(`Total do pedido antes do desconto: R$ ${pedido.recuperarValorTotal().toFixed(2)}`)

pedido.aplicarDescontoEmPorcentagem(10)

console.log(`Total do pedido após o desconto: R$ ${pedido.recuperarValorTotal().toFixed(2)}`)
console.log('-------------------------------');
console.log('pedido com todos os itens')
console.log(pedido.itens)
console.log('-------------------------------');

pedido.removeItem('ProdutoA')
console.log(pedido.itens)
console.log(`Total do pedido após remover ProdutoA: R$ ${pedido.recuperarValorTotal().toFixed(2)}`)