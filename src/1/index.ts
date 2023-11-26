
import { Item } from './class/Item';
import { Pedido } from './class/Pedido';

const item1 = new Item(10, 'Item 1', 'Descrição do Item 1');
const pedido1 = new Pedido()

console.log(item1);
console.log(`seu pedido tem o item ${pedido1.produto.nome} com o valor de R$ ${pedido1.produto.valor}`)
