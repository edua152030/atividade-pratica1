import {Item, Pedido} from './Class'

const item1 = new Item("remedio", 25.99)
const item2 = new Item("agua", 1.99)
const item3 = new Item("biscoito", 3.45)

const pedido1 = new Pedido()

pedido1.adicionarItem(item1)
pedido1.adicionarItem(item2)

const pedido2 = new Pedido()

pedido2.adicionarItem(item2)
pedido2.adicionarItem(item3)



console.log('seu pedido 1 tem')
pedido1.mostrarPedido()
console.log('------------------------')

const totalPedido1 = pedido1.calcularTotal()
console.log(`Total do pedido1: $${totalPedido1.toFixed(2)}`)
console.log('------------------------')

console.log('seu pedido 2 tem')
pedido2.mostrarPedido()
const totalPedido2 = pedido2.calcularTotal()
console.log(`Total do pedido 2: $${totalPedido2.toFixed(2)}`);
