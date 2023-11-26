"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const seuarquivo_1 = require("./seuarquivo"); // Substitua 'seuarquivo' pelo nome do arquivo onde você definiu suas classes
// Criando alguns itens de pedido
const item1 = new seuarquivo_1.ItemPedido(20, 'ProdutoA', 2);
const item2 = new seuarquivo_1.ItemPedido(30, 'ProdutoB', 1);
// Criando um pedido
const pedido = new seuarquivo_1.Pedido();
// Adicionando itens ao pedido
pedido.add(item1);
pedido.add(item2);
// Exibindo o valor total do pedido antes do desconto
console.log(`Total do pedido antes do desconto: R$ ${pedido.recuperarValorTotal().toFixed(2)}`);
// Aplicando desconto de 10%
pedido.aplicarDescontoEmPorcentagem(10);
// Exibindo o valor total do pedido após o desconto
console.log(`Total do pedido após o desconto: R$ ${pedido.recuperarValorTotal().toFixed(2)}`);
// Removendo um item do pedido
pedido.removeItem('ProdutoA');
// Exibindo o valor total do pedido após a remoção do item
console.log(`Total do pedido após remover ProdutoA: R$ ${pedido.recuperarValorTotal().toFixed(2)}`);
