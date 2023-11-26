"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = require("./class/Item");
const Pedido_1 = require("./class/Pedido");
const item1 = new Item_1.Item(10, 'Item 1', 'Descrição do Item 1');
const pedido1 = new Pedido_1.Pedido();
console.log(item1);
console.log(`seu pedido tem o item ${pedido1.produto.nome} com o valor de R$ ${pedido1.produto.valor}`);
